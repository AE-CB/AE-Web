import React from 'react'

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Price = ({type, price}) => {
  return (
    <>
        {type} <span>{numberWithCommas((Math.floor(price * 100) / 100))}</span>
    </>
  )
}

export default Price