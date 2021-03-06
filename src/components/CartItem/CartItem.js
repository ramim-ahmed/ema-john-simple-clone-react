import React from 'react';

const CartItem = (props) => {
    const {name, price, quantity, key} = props.product
    const cartStyle = {
        width : '60%',
        marginLeft : '50px',
        borderBottom : '1px solid grey',
        paddingBottom : '15px'
    }
    return (
        <div style = {cartStyle}  >
            <h3> {name} </h3>
            <p> ${price} </p>
            <p> Quantity : {quantity} </p>
            <button onClick = { () => props.handlCartRemove(key)} className='cart-btn'> remove </button>
        </div>
    );
};

export default CartItem;