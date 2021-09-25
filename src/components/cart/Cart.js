import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
   // const {all_product}=props.cart;

    let total =0;
    //console.log(all_product);

    for(const product of props.cart ){
 
        total =total+product.price;

    }
    return (
        <div>
            <h3>Order Item</h3>
            <h5>Item:{props.cart.length}</h5>
            <h5>Total Price:{total}</h5>

            
        </div>
    );
};

export default Cart;