import React, { useState } from 'react';
import fakeData from '../../../fakeData/index';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0, 50);
    const [products] = useState(first10);
    const [cart, setCart] = useState([])

    const handlAddProduct = (pd) => {
        const newCart = [...cart , pd];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
               
                    {
                        products.map( product => <Product productData = {product}
                        handlAddProduct = {handlAddProduct}
                        />)
                    }
              
            </div>
            <div className='cart-container'>
               <Cart cart = {cart}/>
            </div>
           
        </div>
    );
};

export default Shop;