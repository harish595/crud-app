import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    let navigate =useNavigate();
  return (
  <>
    <div>Order Confirmed</div>
    <button onClick={()=>navigate("/")}>Go Back</button>
  </>
  )
}

export default OrderSummary