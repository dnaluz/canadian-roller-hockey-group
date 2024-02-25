import TextMedia from '@/components/text-media'
import ThreeUp from '@/components/three-up'
import CheckList from '@/components/check-list'
import Quote from '@/components/quote'
import ImageGrid from '@/components/image-grid'

const PageContent = ({ content }: any) => {
  return (
    <>
      {content.map(
        (block: {
          fields: any
          sys: { contentType: { sys: { id: string } }; id: string }
        }) => {
          switch (block.sys.contentType.sys.id) {
            case 'textMedia':
              return (
                <TextMedia
                  image={block.fields.image.fields.file.url}
                  title={block.fields.title}
                  copy={block.fields.copy}
                  reverse={false}
                  cta={{
                    copy: block.fields.cta.fields.copy,
                    url: block.fields.cta.fields.url,
                  }}
                  key={block.sys.id}
                />
              )

            case 'quote':
              return (
                <Quote
                  quote={block.fields.quote}
                  by={block.fields.by}
                  key={block.sys.id}
                />
              )

            case 'imageGrid':
              return (
                <ImageGrid
                  images={block.fields.images.map((image: any) => {
                    return {
                      image: image.fields.file.url,
                      alt: image.fields.title,
                      title: image.fields.title,
                    }
                  })}
                  key={block.sys.id}
                />
              )
            case 'checkList':
              return (
                <CheckList
                  items={block.fields.list}
                  title={block.fields.title}
                  key={block.sys.id}
                />
              )
            case 'threeUp':
              return (
                <ThreeUp
                  title={block.fields.title}
                  cards={block.fields.cards.map((card: any) => {
                    return {
                      image: card.fields.image.fields.file.url,
                      copy: '',
                      title: '',
                    }
                  })}
                  key={block.sys.id}
                />
              )
          }
        }
      )}
    </>
  )
}

export default PageContent
