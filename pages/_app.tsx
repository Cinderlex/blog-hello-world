import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <>
        <Head>
          <meta name="description" content="First steps with building blogs" />
          <title>Hello World Blog</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
