import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Page({children}) {
  return (
    <div>
      <Head>
        <title>Dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}  
      <Footer />    
    </div>
  )
}
