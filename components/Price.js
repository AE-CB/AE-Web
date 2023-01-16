import React from 'react'

const Price = ({type, price}) => {
  return (
    <>
        {type} <span>{price}</span>
    </>
  )
}

export default Price