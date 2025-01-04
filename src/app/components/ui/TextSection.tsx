interface TextSectionProps {
    title?: string
    content: string
    className?: string
  }
  
  export const TextSection = ({ title, content, className = '' }: TextSectionProps) => {
    return (
      <article className={`mb-4 ${className}`}>
        {title && (
          <h3 className="font-open-sans text-3xl text-[#A68A72] underline mb-2">
            {title}
          </h3>
        )}
        <p className="font-open-sans text-[#0d0000] text-base leading-relaxed">
          {content}
        </p>
      </article>
    )
  }