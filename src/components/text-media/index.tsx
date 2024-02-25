import Image, { StaticImageData } from 'next/image'
import CTA, { CTAProps } from '@/components/cta'

import { useEffect, useRef, useState } from 'react'

import Title from '@/components/Title'

export type TextMediaProps = {
  image: StaticImageData
  title: string
  copy: string
  reverse: boolean
  cta: CTAProps
  background?: string
}

const TextMedia = ({ title, image, copy, reverse, cta }: TextMediaProps) => {
  const useIsVisible = (ref: any) => {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      )

      observer.observe(ref.current)
      return () => {
        observer.disconnect()
      }
    }, [ref])

    return isIntersecting
  }

  const ref = useRef<HTMLInputElement>(null)
  const isVisible = useIsVisible(ref)

  return (
    <section ref={ref}>
      <div
        className={`flex ${reverse ? 'flex-reverse' : 'flex-col laptop:flex-row'} laptop:flex-wrap`}
      >
        <div className="w-full laptop:w-1/2 p-8 px-4 laptop:p-16 flex flex-col justify-center relative">
          <div
            className={`transition-all duration-1000 delay-900 w-full laptop:px-8 desktop:px-16 ${!isVisible ? 'laptop:opacity-0 laptop:translate-y-20' : ''}`}
          >
            <Title title={title} />
            <p className="text-sm desktop:text-base mb-6 desktop:mb-8">
              {copy}
            </p>
            {cta && <CTA copy={cta.copy} url={cta.url} className="w-60 ml-0" />}
          </div>
        </div>
        <div className="w-full pt-full laptop:w-1/2 relative laptop:pt-hero overflow-hidden">
          <Image
            src={`https:${image}`}
            alt={title}
            className="absolute top-0 left: 0 w-full"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
  )
}

export default TextMedia
