import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import CTA, { CTAProps } from '@/components/cta'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useAppDispatch } from '@/hooks'
import { setNavBackground } from '@/features/nav'
import { BackgroundImageType } from '@/types'

export type HeroProps = {
  copy: string
  ctas?: CTAProps[]
  subtext?: string
  title: string
  backgroundImages: BackgroundImageType[]
}

const Hero = ({ copy, title, ctas, subtext, backgroundImages }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch()

  const onScroll = useCallback(() => {
    const { scrollY } = window

    if (ref?.current?.offsetTop && scrollY >= ref?.current?.offsetTop) {
      dispatch(setNavBackground('before:bottom-0'))
    } else {
      dispatch(setNavBackground('before:bottom-full before:bg-transparent'))
    }
  }, [ref, dispatch])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const updateCurrentSlide = (index: number) => {
    if (currentSlide !== index) setCurrentSlide(index)
  }

  return (
    <>
      <section className="w-full">
        <div className="relative pt-full laptop:h-0 laptop:pt-hero overflow-hidden before:absolute before:top-0 before:left-0 before:opacity-35 before:bg-black before:z-50 before:w-full before:h-full">
          <Carousel
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            className="top-0 absolute left-0 w-full"
            selectedItem={currentSlide}
            onChange={updateCurrentSlide}
            swipeable
            emulateTouch
          >
            {backgroundImages.map((image: BackgroundImageType, index) => {
              const hasMobileImage = !!image.fields.mobileImage

              return (
                <div key={index} className="relative">
                  <Image
                    priority
                    alt={image.fields.description}
                    src={`https:${image.fields.desktopImage.fields.file.url}`}
                    style={{
                      width: '100%',
                    }}
                    width={1920}
                    height={1080}
                    className={`${hasMobileImage ? '!hidden laptop:!block' : ''}`}
                  />
                  {hasMobileImage && (
                    <Image
                      priority
                      alt={image.fields.description}
                      src={`https:${image.fields.mobileImage?.fields.file.url}`}
                      style={{
                        width: '100%',
                        height: '100vw',
                      }}
                      width={1920}
                      height={1080}
                      className="block laptop:hidden"
                    />
                  )}
                </div>
              )
            })}
          </Carousel>
          <div className="absolute w-full h-full z-50 top-0 left-0">
            <div className="px-12 laptop:px-24 text-center h-full w-full flex items-center flex-wrap">
              <div className="w-full">
                {subtext && (
                  <div className="text-white tracking-widest text-xs font-medium tablet:mb-4 tablet:font-semibold tablet:text-sm desktop:text-base">
                    {subtext}
                  </div>
                )}
                <h1 className="text-white font-semibold w-full tracking-widest mb-4 text-2xl tablet:text-4xl desktop:text-title">
                  {title}
                </h1>
                <p className="text-white mb-3 tablet:mb-6 hidden tablet:block laptop:mb-12 max-w-3xl m-auto text-sm desktop:text-base">
                  {copy}
                </p>
                {ctas?.map((cta) => {
                  return (
                    <CTA
                      copy={cta.copy}
                      secondary={cta.secondary}
                      key={cta.copy}
                      url={cta.url}
                    />
                  )
                })}
                <div className="mt-6 desktop:mt-12 text-white">
                  {backgroundImages.map((image, index) => {
                    return (
                      <button
                        onClick={() => updateCurrentSlide(index)}
                        className={`rounded-full bg-white inline-block w-1.5 h-1.5 desktop:w-2 desktop:h-2 mx-1 ${currentSlide === index ? '' : 'opacity-50'} hover:opacity-100 transition-all duration-500`}
                        key={index}
                      >
                        &nbsp;
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div ref={ref}></div>
    </>
  )
}

export default Hero
