import React, { useState } from "react";
import auth from "./Form.module.css";
import Register from "../Register/Register";
import Login from "../Login/Login";

function Form() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className={auth.container}>
      {showRegister ? (
        <>
          <Register />
          <p className={auth.switchText}>
           Do you have an account?{" "}
            <span onClick={() => setShowRegister(false)} className={auth.link}>
             Login
            </span>
          </p>
        </>
      ) : (
        <>
          <Login />
          <p className={auth.switchText2}>
           Donn't have any account?{" "}
            <span onClick={() => setShowRegister(true)} className={auth.link}>
             Register
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default Form;
