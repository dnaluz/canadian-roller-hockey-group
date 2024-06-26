import { createClient } from 'contentful'

export const cdnClient = createClient({
  space: process.env.CONTENFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
})

export const previewClient = createClient({
  space: process.env.CONTENFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ?? '',
  host: 'preview.contentful.com',
})
