import React from 'react';
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
					<h6 className="product-name">{name}</h6>
					<p>Price: ${price}</p>
				</div>
				<button className="btn-cart" onClick={()=>handleAddToCart(product)}>Add Button</button>
			</div>
                </div>
            </div>
		</div>
	);
};

export default Product;
