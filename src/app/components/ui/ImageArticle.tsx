import Image from 'next/image'
import Link from 'next/link'

interface ImageArticleProps {
  imageSrc: string
  imageAlt: string
  imageCaption?: string
  imageLink?: string
  content: React.ReactNode
  imagePosition?: 'left' | 'right'
}

export const ImageArticle = ({
  imageSrc,
  imageAlt,
  imageCaption,
  imageLink,
  content,
  imagePosition = 'right'
}: ImageArticleProps) => {
  const ImageComponent = (
    <div className="relative text-center">
      {imageLink ? (
        <Link href={imageLink} target="_blank" className="inline-block">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={300}
            height={400}
            className="max-w-full h-auto"
          />
          {imageCaption && (
            <p className="text-[#0d0000] font-open-sans text-lg pr-8 bg-accent/95 pb-0 hover:text-[#A68A72]">
              {imageCaption}
            </p>
          )}
        </Link>
      ) : (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={300}
            height={400}
            className="max-w-full h-auto"
          />
          {imageCaption && (
            <p className="text-[#f3b705] font-open-sans text-lg pr-8">
              {imageCaption}
            </p>
          )}
        </>
      )}
    </div>
  )

  return (
    <div className="w-4/5 mx-auto text-justify relative pt-8 overflow-hidden">
      <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
        <div className="flex-grow">{content}</div>
        {ImageComponent}
      </div>
    </div>
  )
}