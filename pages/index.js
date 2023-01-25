import Head from 'next/head';
import Randomizer from './components/randomizer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lotterya PH</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div>
            <h1>Lotterya PH</h1>
            <h3>Megalotto 6/45 Random Numbers</h3>
            <ul>
              <Randomizer/>
            </ul>
          </div>
      </main>
    </>
  )
}
