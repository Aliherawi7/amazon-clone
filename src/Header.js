import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Header() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className="header">
            <Link to="/">
                <img src="/image/Amazon_logo.png" className="header-logo" />
            </Link>

            <div className="header-search">
                <input type="text" className="header-serachInput" />
                <div className="header-serachIcon">
                    <i className="bi bi-search"></i>
                </div>
                {/* logo */}
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Hello guest
                    </span>
                    <Link to="/login">
                        <span className="header-optionLineTwo">
                            Sign in
                        </span>
                    </Link>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Return
                    </span>
                    <span className="header-optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Your
                    </span>
                    <span className="header-optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header-optionBaskeet">
                        <i className="bi bi-basket-fill"></i>
                        <span className="header-optionLineTwo header-basketCount">{basket.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header