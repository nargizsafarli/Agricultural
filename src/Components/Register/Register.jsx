import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import reg from "./Register.module.css";
import { register } from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, registerError} = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!name) errors.name = "Name required.";
    if (!surname) errors.surname = "Surname required";
    if (!phone || !/^\d{1,10}$/.test(phone))
      errors.phone = "The mobile number is incorrect!";
    if (!email || !/\S+@\S+\.\S+/.test(email))
      errors.email = "The email is not in the correct format.";
    if (!password || password.length < 5)
      errors.password = "Password must contain at least 6 characters.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await dispatch(register({ name, surname, phone, email, password })).unwrap();
      setName("");
      setSurname("");
      setPhone("");
      setEmail("");
      setPassword("");
      await Swal.fire({
        title: "You have successfully registered!",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        confirmButtonText: "OK",
      });
    } catch (err) {
      console.log("Registration error:", err);
    }
  };

  return (
    <div className={reg.container}>
      <h1>Register form</h1>
      <div className={reg.con}>
        <form className={reg.auth} onSubmit={handleSubmit}>
          {registerError && <p className={reg.important}>{registerError}</p>}
          <div className={reg.form}>
            <input className={reg.input} type="text" id="name" placeholder="Name *" value={name} onChange={(e) => setName(e.target.value)} />
            {formErrors.name && <p className={reg.important}>{formErrors.name}</p>}
          </div>
          <div className={reg.form}>
          
            <input type="text" className={reg.input} id="surname" placeholder="Surname *" value={surname} onChange={(e) => setSurname(e.target.value)} />
            {formErrors.surname && <p className={reg.important}>{formErrors.surname}</p>}
          </div>
          <div className={reg.form}>
            <input type="text" className={reg.input} id="phone" placeholder="Phone *" value={phone} onChange={(e) => setPhone(e.target.value)} />
            {formErrors.phone && <p className={reg.important}>{formErrors.phone}</p>}
          </div>
          <div className={reg.form}>
            <input type="email" className={reg.input} id="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} />
            {formErrors.email && <p className={reg.important}>{formErrors.email}</p>}
          </div>
          <div className={reg.form}>
          
            <input type="password" className={reg.input} id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password *" />
            {formErrors.password && <p className={reg.important}>{formErrors.password}</p>}
          </div>

          <button type="submit" className={reg.button}>
            {loading ? "Loading..." : "Register"}
          </button>

          {/* <p className={reg.red}>
            Artıq hesabınız var? <Link to="/contact">Giriş</Link>
          </p> */}
        </form>
      </div>
    </div>
  );
}

export default Register;
