import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = async (request: NextRequest) => {
  // Get hockeyshift ticket

  const response = await fetch(
    `https://stats.api.digitalshift.ca/login?key=${process.env.HOCKEYSHIFT_API_KEY}`
  )
  const { ticket } = await response.json()

  const newResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Set a new response header `x-hello-from-middleware2`
  newResponse.headers.set('x-hockeyshift-ticket', ticket.hash)
  return newResponse
}
