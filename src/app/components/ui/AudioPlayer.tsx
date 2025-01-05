'use client'

import { useState } from 'react'
import { Volume2, VolumeX, Play, Pause } from 'lucide-react'
import { useAudio } from '@/app/context/AudioContext'

export const AudioPlayer = () => {
  const [showVolume, setShowVolume] = useState(false)
  
  const {
    isPlaying,
    isMuted,
    volume,
    currentTime,
    duration,
    togglePlay,
    handleVolumeChange,
    handleTimeChange
  } = useAudio()
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }
  
  return (
    <div className="fixed bottom-4 left-4 bg-[#f3b705] rounded-full shadow-lg z-50 py-2 px-3 sm:px-4 
                    sm:flex sm:flex-row flex flex-col items-center gap-1 sm:gap-2 
                    h-[145px] w-[60px] sm:h-auto sm:w-[220px] md:w-[250px]">
      <button
        onClick={togglePlay}
        className="hover:bg-[#A68A72] rounded-full p-1 transition-colors"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
      
      <span className="text-sm text-gray-600 min-w-[60px] rotate-0">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
      
      <div className="flex-1">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => handleTimeChange(parseFloat(e.target.value))}
          className="w-full accent-[#f2e205] h-1 bg-[#f2f2f2] rounded-lg appearance-none cursor-pointer 
                     sm:rotate-0 -rotate-90 origin-center transform-gpu"
        />
      </div>
      
      <div className="relative flex items-center">
        <button
          onClick={() => setShowVolume(!showVolume)}
          onMouseEnter={() => {
            if (window.innerWidth > 640) {
              setShowVolume(true)
            }
          }}
          className="hover:bg-[#A68A72] rounded-full p-1 transition-colors"
          aria-label="Volume"
        >
          {isMuted || volume === 0 ? 
            <VolumeX size={16} className="sm:w-[18px]" /> :
            <Volume2 size={16} className="sm:w-[18px]" />
          }
        </button>
        
        {showVolume && (
          <div
            onMouseLeave={() => {
              if (window.innerWidth > 640) {
                setShowVolume(false)
              }
            }}
            className="absolute sm:bottom-full sm:left-1/2 sm:-translate-x-1/2 sm:mb-2 
                       left-full top-0 ml-2 bg-[#f3b705] rounded-lg p-2 shadow-lg"
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-20 sm:w-24 accent-[#f2e205] h-1 bg-[#f2f2f2] rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  )
}