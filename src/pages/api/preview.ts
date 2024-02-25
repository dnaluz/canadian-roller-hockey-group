import { cdnClient } from '@/lib'
import { COOKIE_NAME_PRERENDER_BYPASS } from 'next/dist/server/api-utils'

export default async function handler(req: any, res: any) {
  const { slug } = req.query
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const page = await cdnClient.getEntries({
    content_type: 'page',
    'fields.slug[match]': slug,
    include: 2,
  })

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})
  const headers = res.getHeader('Set-Cookie')

  if (Array.isArray(headers)) {
    res.setHeader(
      'Set-Cookie',
      headers.map((cookie) => {
        if (cookie.includes(COOKIE_NAME_PRERENDER_BYPASS)) {
          return cookie.replace('SameSite=Lax', 'SameSite=None; Secure')
        }
        return cookie
      })
    )
  }

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.redirect(page.items[0]?.fields.slug ?? '/')
}
