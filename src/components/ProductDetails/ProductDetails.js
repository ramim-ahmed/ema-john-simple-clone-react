import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Header/Product/Product';
const ProductDetails = () => {
    const {productKey} = useParams();
    const products =  fakeData.find( product => product.key === productKey )
    return (
        <div>
            <h1> {productKey} Product Details comming sooooooooon </h1>
            <Product showAddToCart = {false} productData = {products}/>
        </div>
    );
};

export default ProductDetails;