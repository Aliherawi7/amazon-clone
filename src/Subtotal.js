import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import {getBasketTotal} from './reducer'
import { useNavigate } from 'react-router-dom'

function Subtotal(){
    const [{basket} , dispatch] = useStateValue()
    const navigate = useNavigate()
    return (
        <div className="subtotal">
            <p>
                Subtotal ({basket.length} {(basket.length>1)? 'items':'item'} ) : <strong>${getBasketTotal(basket)}</strong>
            </p>
            <small>
                <input type="checkbox"/>
                <p>this order contains a gift</p>
            </small>
            <button onClick={()=> navigate('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
