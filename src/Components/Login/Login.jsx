import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import log from "./Login.module.css";
import { login } from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

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
        {error && <p className={log.error}>{error}</p>}
        <div className={log.form}>
          <label htmlFor="email">E-poçt</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={log.form}>
          <label htmlFor="password">Şifrə</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className={log.button}>
          {loading ? "Yüklənir..." : "Daxil ol"}
        </button>
        <p className={log.redirect}>
          Hesabınız yoxdur? <Link to="/register">Qeydiyyat</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
