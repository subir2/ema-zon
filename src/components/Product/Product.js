import React from 'react';
import './Product.css';

const Product = (props) => {
// console.log(props);
  const{category,name,img,price,star,seller,stock}=props.product;


    return (
        <div className="product">
          <div>
          <img src={img} alt="" srcset="" />

          </div>
            
            <div className="product-details">
            <h5 className="product-name">Name : {name}</h5>
            <p><small>by:{seller}</small></p>
            <p>Price: {price}</p>
            <p>Only {stock} has Left</p>
            <button className="btn" onClick={()=>props.eventhandel(props.product)}>Add To Cart</button>
            </div>
            
            
           
        </div>
    );
};

export default Product;