// import React, { useState } from 'react'
// import auth from "./Form.module.css"
// import Register from '../Register/Register';
// import Login from '../Login/Login';

// function Form() {
//   return (
//     <div className={auth.container}>
//      <Register/>
//      <Login/>
//   </div>
//   )
// }

// export default Form
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
            Artıq hesabınız var?{" "}
            <span onClick={() => setShowRegister(false)} className={auth.link}>
              Giriş et
            </span>
          </p>
        </>
      ) : (
        <>
          <Login />
          <p className={auth.switchText2}>
            Hesabınız yoxdur?{" "}
            <span onClick={() => setShowRegister(true)} className={auth.link}>
              Qeydiyyat
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default Form;
