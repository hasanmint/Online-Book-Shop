import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = (props) => {
    const {handleAddToCart,product}=props;
	const { name, img, price } = props.product;
    // console.log(product);

    
    
	return (
		<div className="container">
			<div className="row">
                <div className="col-md-4 col-sm-12">
                <div className="product">
				<img src={img} alt="" />
				<div className="product-info">
					<h5 className="title">{name}</h5>
					<h6>Price: ${price}</h6>
				</div>
				<button className="btn-cart" onClick={()=>handleAddToCart(product)}>
                    <p className='btn-text mt-3'>Add Cart</p>
                    <FontAwesomeIcon  icon={faShoppingCart}></FontAwesomeIcon>
                </button>
			</div>
                </div>

            </div>

		</div>

       
		
	);
};

export default Product;
