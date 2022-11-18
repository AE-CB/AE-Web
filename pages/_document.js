import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang='es'>
            <Head />
            <head>
                <title> CarHouse - Inicio </title>
                <link rel="shortcut icon" href="./assets/img/logo/icon-shortcut.png" />
                {/* Fontawesome */}
                <Script src="https://kit.fontawesome.com/de0eb60c48.js" crossOrigin="anonymous"></Script>
                {/* AOS (Animate On Scroll) */}
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

            </head>
            <body>
                <Header />
                <Main />
                <NextScript />
                <Footer/>
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                {/* <script>
                    AOS.init();
                </script> */}
            </body>

        </Html>
    )
}