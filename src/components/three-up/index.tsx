import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import Title from '@/components/Title'

export type ThreeUpCard = {
  title: string
  image: string
  copy: string
  background?: string
}

export type ThreeUpProps = {
  title: string
  cards: ThreeUpCard[]
}

const ThreeUp = ({ title, cards }: ThreeUpProps) => {
  return (
    <section className="bg-white w-full px-4 py-16 tablet:py-32 tablet:px-16">
      <div className="flex flex-row justify-center w-full flex-wrap">
        <div className="w-full">
          <Title title={title} center className="mb-24" />
        </div>
        {cards.map((card: ThreeUpCard, index: number) => {
          return (
            <div
              className="mt-8 tablet:mt-0 w-1/3 text-center"
              key={`${card.title}-${index}`}
            >
              <Link
                href=""
                className="grayscale group hover:grayscale-0 transition-all transition-duration-300"
              >
                <Image
                  src={`https:${card.image}`}
                  alt={card.title}
                  className="mb-2 mx-auto group-hover"
                  height={200}
                  width={300}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {card.title && (
                  <h2 className="text-3xl mb-2 font-semibold">{card.title}</h2>
                )}
                {card.copy && <p>{card.copy}</p>}
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ThreeUp
