import Head from 'next/head'
import Header from '../components/header'
import Link from 'next/link'
import MainHeader from '../components/MainHeader'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>

      <MainHeader />
    </div>
  )
}
