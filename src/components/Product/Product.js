import React from 'react';

const Product = (props) => {
    
    return (
        <div>
            <p><img src={props.product.img} alt="" /></p>
            <p>{props.product.name}</p>
            <p>{props.product.price}</p>
        </div>
    );
};

export default Product;