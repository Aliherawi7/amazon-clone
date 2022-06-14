import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login'
import Signup from './Signup'
import Payment from './Payment'

function App() {

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="*" element={<h1 style={{textAlign:'center',marginTop:'40px'}}>Not found</h1>}/>
        </Routes>
    </Router>

  );
}

export default App;
