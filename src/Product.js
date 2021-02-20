import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,price,image,rating}) {

      const [{basket},dispatch] =useStateValue();

     
      const addtoBasket =() =>{

            dispatch({
                  type:'ADD_TO_BASKET',
                  item:{
                        id:id,
                        title:title,
                        image:image,
                        price:price,
                        rating:rating,
                  },
            });
      };

      return (
            <div className="product">
                  <CurrencyFormat
                  renderText={(value) => (
                         <>
                  <div className="product__info">
                        <p>{title}</p>
                        <p className="product__price">
                              {/* <small>₹</small> */}
                              <strong>{value}</strong>
                        </p>
                        <div className="product__rating">
                              {Array(rating).fill().map((_, i)=>(
                                    <p>⭐</p>
                              ))}
                              
                              
                        </div>
                        
                  </div>
                   </>
                  )}
                  decimalScale={2}
                   value={price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                  />
                  {/* <img 
                  src="https://images-na.ssl-images-amazon.com" alt=""/> */}
                  <img src={image} alt=""/>
                  <button onClick={addtoBasket}>Add to Cart</button>
                 
       </div>
      )
}

export default Product
