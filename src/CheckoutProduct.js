import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,price,rating}) {
const [{basket},dispatch] = useStateValue();

const removeFromBasket = () => {
      dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
      })
}

      return (
            <div className='checkoutProduct'>

                  <img src={image} alt="" className="checkoutProduct__image"/>

                  <CurrencyFormat
                   renderText={(value) => (
                         <>
                  <div className="checkoutProduct__info">
                        <p className="checkoutProduct__title">{title}</p>
                        <p className="checkoutProduct__price">
                              <strong>{value}</strong>
                        </p>
                 
                        <div className="checkoutProduct__rating">
                              {Array(rating)
                              .fill()
                              .map((_, i) =>(
                              <p>⭐</p>
                              ))}                        
                        </div>
                        <button onClick={removeFromBasket}>Remove from Basket</button>
                  </div>
                  </>
                  )}
                  decimalScale={2}
                   value={price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                 
                  />
            </div>
      )
}

export default CheckoutProduct
