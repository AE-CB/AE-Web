import React from 'react'

const Car = () => {
    return (
        <div></div>
    )
}

export default Car

export const getStaticProps = async ({ params: { id } }) => {

    const product = {"id": 1,"name":"John", "age":30, "car":null}

    return {
        props: { product }
    }
}

export const getStaticPaths = async () => {
    const products = [
        {"id": 1,"name":"John", "age":30, "car":null}
    ]

    
}
