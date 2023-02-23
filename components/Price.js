import React from 'react'

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Price = ({type, price}) => {
  return (
    <>
        {type} <span>{numberWithCommas(price)}</span>
    </>
  )
}

export default Price