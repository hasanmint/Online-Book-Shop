import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(Response=>Response.json())
        .then(data=>setProducts(data))
    },[])
    return (
       <div className="container-fluid">
           <div className="row">
            <div className='shop-container container'>
                <div className="products-container row">
                    {
                        products.map(product=>
                        <Product
                        key={product.id}
                        product={product}
                        ></Product>)
                    }
                </div>
                <div className="cart-container row">
                    <h4>Cart</h4>
                </div>
           </div>
        </div>
       </div>
    );
};

export default Shop;