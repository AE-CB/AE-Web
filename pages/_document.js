import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Script from 'next/script'

import { Fragment } from "react";
import { useRouter } from "next/router";

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <title>
                    AUTOXCAPE
                </title>
                <link rel="shortcut icon" href="./assets/img/logo/logo.png" />
                {/* Fontawesome */}
                <Script src="https://kit.fontawesome.com/de0eb60c48.js" crossOrigin="anonymous"></Script>
                {/* <Script strategy="beforeInteractive" type="text/javascript" src="assets/js/custom.js"></Script> */}
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