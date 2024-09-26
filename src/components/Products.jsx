import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <NavLink to="feature-products">Feature Products</NavLink>
        <NavLink to="new-products">New Products</NavLink>
        <Outlet/>
    </div>
  )
}

export default Products