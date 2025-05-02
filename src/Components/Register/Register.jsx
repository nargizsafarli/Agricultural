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
    if (!name) errors.name = "Ad daxil edilməlidir.";
    if (!surname) errors.surname = "Soyad daxil edilməlidir.";
    if (!phone || !/^\d{1,10}$/.test(phone))
      errors.phone = "Mobil nömrə düzgün deyil!";
    if (!email || !/\S+@\S+\.\S+/.test(email))
      errors.email = "Email düzgün formatda deyil.";
    if (!password || password.length < 5)
      errors.password = "Şifrə ən azı 6 simvoldan ibarət olmalıdır.";
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
        title: "Uğurla qeydiyyatdan keçdiniz!",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        confirmButtonText: "OK",
      });
    } catch (err) {
      console.log("Qeydiyyat xətası:", err);
    }
  };

  return (
    <div className={reg.container}>
      <h1>Register form</h1>
      <div className={reg.con}>
        <form className={reg.auth} onSubmit={handleSubmit}>
          {registerError && <p className={reg.important}>{registerError}</p>}
          <div className={reg.form}>
            <input type="text" id="name" placeholder="Name *" value={name} onChange={(e) => setName(e.target.value)} />
            {formErrors.name && <p className={reg.important}>{formErrors.name}</p>}
          </div>
          <div className={reg.form}>
          
            <input type="text" id="surname" placeholder="Surname *" value={surname} onChange={(e) => setSurname(e.target.value)} />
            {formErrors.surname && <p className={reg.important}>{formErrors.surname}</p>}
          </div>
          <div className={reg.form}>
            <input type="text" id="phone" placeholder="Phone *" value={phone} onChange={(e) => setPhone(e.target.value)} />
            {formErrors.phone && <p className={reg.important}>{formErrors.phone}</p>}
          </div>
          <div className={reg.form}>
            <input type="email" id="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} />
            {formErrors.email && <p className={reg.important}>{formErrors.email}</p>}
          </div>
          <div className={reg.form}>
          
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password *" />
            {formErrors.password && <p className={reg.important}>{formErrors.password}</p>}
          </div>

          <button type="submit" className={reg.button}>
            {loading ? "Yüklənir..." : "Qeydiyyatdan keç"}
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
