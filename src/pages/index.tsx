import { GetStaticProps } from 'next'

import Head from 'next/head'

import { useContentfulLiveUpdates } from '@contentful/live-preview/react'

import Hero from '@/components/hero'
import Layout from '@/components/layout'
import PageContent from '@/components/page-content'

import { ImageType, CTAType, BackgroundImageType } from '@/types'
import { cdnClient, previewClient } from '@/lib'

type HomeProps = {
  content: {
    title: string
    hero: {
      fields: {
        title: string
        copy: string
        subtext: string
        images: ImageType[]
        ctas: CTAType[]
        backgroundImages: BackgroundImageType[]
      }
    }
    content: {
      fields: Record<string, any>
    }
  }
}

export default function Home({ content }: HomeProps) {
  const updatedContent = useContentfulLiveUpdates(content)
  const { title, hero, content: pageContent } = updatedContent

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        {hero && (
          <Hero
            copy={hero.fields.copy}
            title={hero.fields.title}
            subtext={hero.fields.subtext}
            backgroundImages={hero.fields.backgroundImages}
            ctas={hero.fields.ctas.map((cta) => {
              return {
                copy: cta.fields.copy,
                url: cta.fields.url,
                secondary: cta.fields.secondary,
              }
            })}
          />
        )}
        <PageContent content={pageContent} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  // const ticket = req.headers['x-hockeyshift-ticket']

  // const leagueRes = await fetch(`https://stats.api.digitalshift.ca/leagues`, {
  //   headers: new Headers({ Authorization: `ticket="${ticket}"` }),
  // })

  // const { leagues } = await leagueRes.json()

  const contentfulConfig: any = {
    content_type: 'page',
    'fields.slug[match]': '/',
    include: 2,
  }

  const client = preview ? previewClient : cdnClient
  const response = await client.getEntries(contentfulConfig)

  return {
    props: { content: response?.items[0]?.fields },
  }
}
