import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(Response=>Response.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div>
            <h1 className="display-4">Start Assignment Project</h1>

            <section>
                <div className='container-fuild'>
                    <div className="row">
                        <div className="col-md-8">
                          <h2>All Products :{products.length}</h2>

                            {
                                products.map(product=>
                                <Product
                                key={product.id}
                                product={product}
                                >
                                </Product>)
                            }
                        </div>
                        <div className="col-md-4">
                           <h2>Cart Show</h2>
                        </div>
                    </div>
                </div>
            </section> 
        </div>
    );
};

export default Shop;