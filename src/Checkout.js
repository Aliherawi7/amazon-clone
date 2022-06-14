import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-banner" src="/image/b1.jpg" alt="" />
                <h1 className="checkou-title">Your shopping Basket</h1>
                {basket.map((item) => <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                />
                )}

            </div>
            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout