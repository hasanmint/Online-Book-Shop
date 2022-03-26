import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart,choseRandom}=props;
 
    return (
        <div className='cart'>
            <h2>Select Books</h2>
             <p>Selected Item: {cart.length}</p>
             <div className='bg-gray border'>
                {
                    cart.map((item)=>(
                        <p className='bg-success text-white p-3'>{item.name}</p>
                        ))
                }
              </div>
              <div>
                <button onClick={choseRandom} className='btn btn-light'>CHOOSE 1 FOR ME</button>
                <button className='btn btn-light mt-2'>CHOOSE AGAIN</button>
              </div>
    
        </div>

    );
};

export default Cart;