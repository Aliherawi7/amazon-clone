import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Signup() {
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState({
        value: '',
        type: 'password',
        eye: 'bi bi-eye-slash-fill'
    })
    const [RepeatPassword, setRepeatPassword] = useState({
        value: '',
        type: 'password',
        eye: 'bi bi-eye-slash-fill'
    })
    const passwordTypes = {
        PASSWORD: "password",
        REPEAT_PASSWORD: 'repeat_password'
    }

    const showHidePassword = () => {
        setPassword({
            value: Password.value,
            type: Password.type === 'password' ? 'text' : 'password',
            eye: Password.eye === 'bi bi-eye-slash-fill' ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill'
        })
    }
    const showHideRepeatPassword = () => {
        setRepeatPassword({
            value: RepeatPassword.value,
            type: RepeatPassword.type === 'password' ? 'text' : 'password',
            eye: RepeatPassword.eye === 'bi bi-eye-slash-fill' ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill'
        })
    }
    const passwordChange = (e, type) => {
        switch (type) {
            case passwordTypes.PASSWORD : {
                const prevState = { ...Password }
                prevState.value = e.target.value
                setPassword(prevState)
                break;
            }
            case passwordTypes.REPEAT_PASSWORD : {
                const prevState = { ...RepeatPassword }
                prevState.value = e.target.value
                setRepeatPassword(prevState)
                break;
            }

        }

    }

    return (
        <div className="login-form">
            <Link to="/">
                <img className="login-logo" src="/image/Amazon_logo_black.png" />
            </Link>

            <div className="login-container">
                <h1>Sign up</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={Email} onChange={(e) => (e => setEmail(e.target.value))} />
                    <h5>Password</h5>
                    <input type={Password.type} value={Password.value} onChange={(e) => passwordChange(e, passwordTypes.PASSWORD)} />
                    <div className="show-hide-password" onClick={showHidePassword}><i className={Password.eye}></i></div>
                    <h5>Repeat Password</h5>
                    <input type={RepeatPassword.type} value={RepeatPassword.value} onChange={(e) => passwordChange(e, passwordTypes.REPEAT_PASSWORD)} />
                    <div className="show-hide-RepeatPassword" onClick={showHideRepeatPassword}><i className={RepeatPassword.eye}></i></div>
                    <button type="button" className="signin-button">create amazon account</button>
                </form>
                <p>
                    By clicking the create amazon account you agree to the amazon clone Conditions of Use & Sale
                </p>
                <Link to={"/login"}>
                    <button className="signup-button">sign in</button>
                </Link>
            </div>
        </div>

    )
}

export default Signup