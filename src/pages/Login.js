import React, { useState } from "react";
import "../styles.css"; 
import miImagen from "../assets/img2.png"; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login exitoso!");
  };

  return (
    <div className="login-page">

<div className="left-side">
        <img
          src={miImagen} 
          alt="Imagen Ilustracion"
          className="registration-image"
        />
      </div>
      <div className="right-side">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

