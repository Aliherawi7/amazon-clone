import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, price, image, rating }) {
    const [state, dispatch] = useStateValue()

    const addToBasket = () => {   
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                price:price,
                image:image,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map(item => <i key={item} className="bi bi-star-fill" style={{paddingRight:"5px"}}></i>)}
                </div>
            </div>
            <img src={image} alt="" />
            <button className="add-to-basket" onClick={addToBasket}>add to basket</button>
        </div>
    )
}

export default Product
