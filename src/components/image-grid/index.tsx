import Image, { StaticImageData } from 'next/image'

import { Masonry } from 'react-masonry'

export type ImageGridImage = {
  image: StaticImageData
  alt: string
  title: string
  copy?: string
}

export type ImageGrid = {
  images: ImageGridImage[]
  background?: string
}

const ImageGrid = ({ images, background }: ImageGrid) => {
  const imageCount = images.length

  return (
    <section
      className={`w-full ${background ?? ''} relative flex flex-row flex-wrap`}
    >
      {images.map((item, index) => {
        return (
          <a
            className={`${index + 1 < imageCount ? 'w-1/2' : 'w-full'} h-full group relative after:absolute after:top-0 after:block after:left-0 after:h-full after:w-full after:bg-black after:opacity-30 hover:after:opacity-0 after:transition-opacity after:transition-duration-300 hover:cursor-pointer`}
            key={`${item.title}-${index}`}
          >
            <Image
              src={`https:${item.image}`}
              className=""
              alt={item.alt}
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={800}
              height={600}
            />

            <div className="opacity-0 group-hover:opacity-65 absolute bottom-0 left-0 block w-full bg-black text-white p-2 text-sm font-semibold transition-opacity transition-duration-300">
              {item.title}
            </div>
          </a>
        )
      })}
    </section>
  )
}

export default ImageGrid
