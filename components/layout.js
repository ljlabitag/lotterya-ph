import Head from "next/head";
import Navbar from "./navbar/navbar";

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>LotteryaPH</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container-fluid">
                <Navbar />
                <main>{children}</main>
                <footer></footer>
            </div>
        </>
    )
}