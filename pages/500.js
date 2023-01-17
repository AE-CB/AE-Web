// pages/500.js

import React from 'react'
import ErrorPage from 'next/error'


const Custom500 = () => {
    return <ErrorPage statusCode={500} />
}

Custom500.layout = "NormalLayout";
export default Custom500