import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
  const total = cart.reduce((total, productPrice) => total + productPrice.price, 0 )
  const formatNumber = number => {
      const precision = number.toFixed(2);
      return Number(precision)
  }
  let shipping = 0;
  if( total > 35){
      shipping = 0
  }else if(total > 15) {
         shipping = 4.99
  }else if ( total > 0){
      shipping = 12.99
  }
  const tax = total / 10 ;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <p>Product Price : {formatNumber(total)}</p>
            <p>Shipping & Handling : ${shipping}</p>
            <p>Tax & Vat : ${formatNumber(tax)}</p>
            <p>Total :${formatNumber(total + shipping + tax)} </p>
        </div>
    );
};

export default Cart;