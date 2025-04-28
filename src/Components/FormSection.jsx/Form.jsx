import React, { useState } from 'react'
import auth from "./Form.module.css"
import Register from '../Register/Register';
import Login from '../Login/Login';

function Form() {

    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
  
    const toggleRegister = () => setIsRegisterOpen(!isRegisterOpen);
    const toggleLogin = () => setIsLoginOpen(!isLoginOpen);

  return (
    <div className={auth.container}>
  

    {/* Register Form */}
    <div>
      <button onClick={toggleRegister} className={auth.button}>
        {isRegisterOpen ? "-" : "+"} Register
      </button>
      {isRegisterOpen && (
        <div>
          <h3>Register Form</h3>
        <Register/>
        </div>
      )}
    </div>


    {/* Login Form */}
    <div>
      <button onClick={toggleLogin} className={auth.button}>
        {isLoginOpen ? "-" : "+"} Login
      </button>
      {isLoginOpen && (
        <div>
          <h3>Login Form</h3>
         <Login/>
        </div>
      )}
    </div>
  </div>
  )
}

export default Form