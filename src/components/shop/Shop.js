import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import Cart from '../cart/Cart';
import './Shop.css';


const Shop = () => {

    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);

    

    useEffect(()=>
    fetch('./products.JSON')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    
    
    ,[]);

    const eventhandel =(product_come_from_product_js_onlick)=>{
      //console.log(product_come_from_product_js_onlick);
      const newCart=[...cart,product_come_from_product_js_onlick];
      setCart(newCart);

    }

    return (
        <div className="shop-container">
            <div className="product-container">
               <h3>This is Product</h3>
               {
                   products.map(product=> <Product 
                    product={product}
                    eventhandel={eventhandel}
                    >  
                    </Product>)
                   
               }
            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;