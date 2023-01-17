// pages/404.js
import React from 'react'
import ErrorPage from 'next/error'


const Custom404 = () => {
    return <ErrorPage statusCode={404} />
}

Custom404.layout = "NormalLayout";
export default Custom404