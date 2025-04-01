import React from 'react'
import { Footer, Navbar, Product } from "../components"
import Checkout from './Checkout';

const Products = () => {
  return (
    <>
      <Navbar />
      <Product />
      <Checkout/>
      <Footer />
    </>
  )
}

export default Products