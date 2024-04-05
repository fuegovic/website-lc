import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import type { ReactElement } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const geist = localFont({ src: './GeistVF.woff2' })

// import { Analytics } from '@vercel/analytics/react';
import '../style.css'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <main className={geist.className}>
      <Component {...pageProps} />
      <SpeedInsights />
      {/* <Analytics /> */}
      </main>
  )
}