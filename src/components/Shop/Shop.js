import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(Response=>Response.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart=(product)=>{
        // console.log(product)
        const newCart=[...cart,product];
        setCart(newCart);
        
    }

    const choseRandom = () => {
        if (cart.length !== 0) {
          const randomNumber = Math.floor(Math.random() * cart.length);
          setCart([cart[randomNumber]]);
        }
      };

    console.log()

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
                        handleAddToCart={handleAddToCart}
                        choseRandom={choseRandom}
                        ></Product>)
                    }

                    <div className='mt-50'>
                        
                    </div>
                </div>
                
                <div className="cart-container row ">
                <Cart cart={cart}></Cart>
                </div>
           </div>
           
        </div>
       </div>
    );
};

export default Shop;