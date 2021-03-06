import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../../fakeData/index';
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0, 50);
    const [products] = useState(first10);
    const [cart, setCart] = useState([])
    useEffect( () => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map( existingKey => {
            const products = fakeData.find( pdKey => pdKey.key === existingKey);
            products.quantity = savedCart[existingKey];
            return products
        } )
        setCart(previousCart)
    }, [] )
    const handlAddProduct = (pd) => {
        const keyAdded = pd.key;
        const sameProduct = cart.find( product => product.key === keyAdded);
        let count = 1;
        let newCart ;
        if(sameProduct){
           count = sameProduct.quantity + 1;
           sameProduct.quantity = count;
           const others = cart.filter(products => products.key !== keyAdded);
           newCart = [...others, sameProduct]
        }else{
            pd.quantity = 1;
            newCart = [...cart, pd]
        }
        setCart(newCart)
        addToDatabaseCart(pd.key , count)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
               
                    {
                        products.map( product => <Product key = {product.key} showAddToCart = {true} productData = {product}
                        handlAddProduct = {handlAddProduct}
                        />)
                    }
              
            </div>
            <div className='cart-container'>
               <Cart cart = {cart}>
                        <Link to = '/review'>
                                <button className='cart-btn' >Order Review</button>
                        </Link>
               </Cart>
            </div>
           
        </div>
    );
};

export default Shop;