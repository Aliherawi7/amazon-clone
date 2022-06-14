import React from 'react'
import './Payment.css'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Payment() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className='payment'>
            <div className="payment-container">
                <h1>Checkout({basket.length} items)</h1>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>email</p>
                        <p>customer name</p>
                        <p>Herat Afghanistan</p>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment-items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />

                        ))}
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment method</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment