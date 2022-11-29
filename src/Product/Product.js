import React from 'react'
import { useParams } from "react-router-dom";

function Product() {
  {console.log('useParams', useParams())}
  return (
    <div><img src='https://m.media-amazon.com/images/I/51KeWRfMUJL._AC_UL320_.jpg' /></div>
  )
}

export default Product