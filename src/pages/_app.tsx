import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContentfulLivePreviewProvider locale="en-US" enableLiveUpdates={true}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ContentfulLivePreviewProvider>
  )
}
