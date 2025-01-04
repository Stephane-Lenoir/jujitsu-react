'use client'

import { createContext, useContext, useRef, useState, useEffect } from 'react'

interface AudioContextType {
  audio: HTMLAudioElement | null
  isPlaying: boolean
  isMuted: boolean
  volume: number
  currentTime: number
  duration: number
  togglePlay: () => void
  toggleMute: () => void
  handleVolumeChange: (value: number) => void
  handleTimeChange: (value: number) => void
}

const AudioContext = createContext<AudioContextType | null>(null)

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new window.Audio('/music/japanese-traditional-festival-164421.mp3')
      audioRef.current.loop = true

      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current?.duration || 0)
      })

      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current?.currentTime || 0)
      })

      return () => {
        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current = null
        }
      }
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
      if (audioRef.current.muted) {
        audioRef.current.volume = 0
        setVolume(0)
      } else {
        audioRef.current.volume = 1
        setVolume(1)
      }
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }

  const handleTimeChange = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  return (
    <AudioContext.Provider value={{
      audio: audioRef.current,
      isPlaying,
      isMuted,
      volume,
      currentTime,
      duration,
      togglePlay,
      toggleMute,
      handleVolumeChange,
      handleTimeChange
    }}>
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}