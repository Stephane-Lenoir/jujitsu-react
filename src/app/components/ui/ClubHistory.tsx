'use client'

import { MotionDiv } from './MotionDiv'

interface HistoryProps {
  title: string
  paragraphs: string[]
}

export const ClubHistory = ({ title, paragraphs }: HistoryProps) => {
  return (
    <div className="club-history">
      <h2 className="title-history pt-8 underline font-open-sans text-3xl text-center">
        {title}
      </h2>
      <MotionDiv direction="left" className="space-y-4 mt-8 px-4 md:px-40">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="texthistroy font-open-sans text-base leading-relaxed text-center">
            {paragraph}
          </p>
        ))}
      </MotionDiv>
    </div>
  )
}