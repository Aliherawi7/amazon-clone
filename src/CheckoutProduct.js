import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, price, image, rating }) {
    const [state, dispatch] = useStateValue()
    const removeFromBasket = ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className="checkout-product" key={id}>
            <img src={image} />
            <div className="CheckoutProduct-info">
                <p className="product-title">{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map(item => <i className="bi bi-star-fill" style={{paddingRight:"5px"}}></i>)}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
            
        </div>
    )
}
export default CheckoutProduct