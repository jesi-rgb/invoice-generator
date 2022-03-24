import type { NextPage } from 'next'
import Head from 'next/head'
import Form from '../components/Form'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Invoce Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Form />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Ole los caracole
      </footer>
    </div>
  )
}

export default Home
