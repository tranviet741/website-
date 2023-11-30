// import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import React, { useState } from "react";


function Cart() {
  const [cart, setCart] = useState([]);
  // const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="/Cart" />

      <div className="d-flex align-content-center"> 
        <h1 className="">Giỏ hàng của bạn</h1>
        {cart.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - {product.price}
              </li>
            ))}
          </ul>
        )}
      </div>
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div> </div>
              <div className="cart-header d-flex justify-content-between align-align-content-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
