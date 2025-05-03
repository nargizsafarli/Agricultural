import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link} from "react-router-dom";
import log from "./Login.module.css";
import { login } from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";

function Login() {
  const dispatch = useDispatch();
  const { loading, loginError } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email və şifrə mütləqdir.");
      return;
    }

    try {
      await dispatch(login({ email, password })).unwrap();
      setEmail("");
      setPassword("");
      await Swal.fire({
        title: "Qeydiyyat uğurlu oldu!",
        text: "İndi giriş edə bilərsiniz.",
        timer: 3000,
        icon: "success",
        confirmButtonText: "OK",
      });
  
      
    } catch (err) {
      console.log("Login xətası:", err);
    }
  };

  return (
    <div className={log.container}>
      <h1>Login form</h1>
      <form className={log.auth} onSubmit={handleSubmit}>
        {loginError && <p className={log.error}>{loginError}</p>}
        <div className={log.form}>
          <input className={log.input} type="email" id="email" value={email} placeholder="Email *" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={log.form}>
          <input className={log.input} type="password" id="password" placeholder="Password *" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className={log.button}>
          {loading ? "Yüklənir..." : "Daxil ol"}
        </button>
      </form>
    </div>
  );
}

export default Login;
