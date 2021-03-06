import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import HappyImg from '../../images/giphy.gif';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import CartItem from '../CartItem/CartItem';
import Cart from '../Header/Cart/Cart';
import '../Header/Cart/Cart.css';
import '../Header/Shop/Shop.css';
const Reviews = () => {
     const [cart, setCart] = useState([]);
     const [ordered, setOrder] = useState(false)

     const handlPlaceOrder = () => {
         setCart([]);
         setOrder(true)
         processOrder();
     }

     const handlCartRemove = (productKeys) => {
        const newCart = cart.filter( pd => pd.key !== productKeys )
        setCart(newCart)
        removeFromDatabaseCart(productKeys)
     }
     useEffect( () => {
        const savedCart =  getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const counts = productKey.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        } )
       
        setCart(counts)
     }, [] )

     let thankyou;
     if(ordered) {
        thankyou = <img src={HappyImg} alt=""/>
     }
    return (
        <div className='shop-container' >
           <div className='products-container' >
                {
                        cart.map( pd => <CartItem 
                            handlCartRemove = {handlCartRemove} 
                            key = {pd.key} 
                            product = {pd}
                            /> )
                    }
               {thankyou}
           </div>
           
           <div className = 'cart-container' >
                <Cart cart = {cart} > 
                    <Link to = '/review'>
                         <button onClick = {handlPlaceOrder} className='cart-btn' >Place Order</button>
                    </Link>
                </Cart>
           </div>
        </div>
    );
};

export default Reviews;