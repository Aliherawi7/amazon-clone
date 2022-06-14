import React,{useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login(){
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState({
        value:'',
        type:'password',
        eye: 'bi bi-eye-slash-fill'
    })
    const passwordChange = (e)=>{
        const prevState = {...Password}
        prevState.value = e.target.value
        setPassword(prevState)
    }
    const showHidePassword =() => {
        setPassword({
            value: Password.value,
            type: Password.type === 'password' ? 'text':'password',
            eye: Password.eye === 'bi bi-eye-slash-fill'? 'bi bi-eye-fill':'bi bi-eye-slash-fill'
        })
    }
    return(
        <div className="login-form">
             <Link to="/">
                 <img className="login-logo" src="/image/Amazon_logo_black.png"/>
             </Link>

             <div className="login-container">
                 <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={Email} onChange={(e)=>(e=> setEmail(e.target.value))} />
                    <h5>Password</h5>
                    <input type={Password.type} value={Password.value} onChange={(e)=>(passwordChange(e))}/>
                    <div className="show-hide-password" onClick={showHidePassword}><i className={Password.eye}></i></div>
                    <button type="button" className="signin-button">sign in</button>
                </form>
                <p>
                    By clicking the sign in you agree to the amazon clone Conditions of Use & Sale
                </p>
                <button className="signup-button">create amazon account</button>

             </div>
        </div>

    )
}

export default Login