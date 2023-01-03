import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Script from 'next/script'

import { Fragment } from "react";
import { useRouter } from "next/router";

export default function Document() {
    return (
        <Html lang='es'>
            <Head>
                <title> CarHouse - Inicio </title>
                <link rel="shortcut icon" href="./assets/img/logo/icon-shortcut.png" />
                {/* Fontawesome */}
                <Script src="https://kit.fontawesome.com/de0eb60c48.js" crossOrigin="anonymous"></Script>

            </Head>
            <body>
                {/* <Header /> */}
                <Main />
                <NextScript />
                
                {/* <Footer/> */}
            </body>

        </Html>
    )
}