import React from 'react'
import {useNavigate} from "react-router-dom"
const Home = () => {
  const navigate = useNavigate();
  let handleChange=()=>{
navigate("/order-summary")
  }
  return (
    <div>Home


      <button onClick={handleChange}>Place Order</button>
    </div>
  )
}

export default Home