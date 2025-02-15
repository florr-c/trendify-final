import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import "../styles.css";
import miImagen from "../assets/img1.png";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length <= 6) {
      setError("La contraseña debe tener más de 6 caracteres.");

      // Ocultar el mensaje de error después de 3 segundos
      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });

      setMessage("¡Registro exitoso!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });

      // Ocultar el mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setError(error.message);

      // Ocultar el mensaje de error después de 3 segundos
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="registration-page">
      <div className="left-side">
        <img
          src={miImagen}
          alt="Imagen ilustrativa"
          className="registration-image"
        />
      </div>

      <div className="right-side">
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="firstName">Nombre</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              title="Por favor complete este campo"
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              title="Por favor complete este campo"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              title="Por favor complete este campo"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              title="Por favor complete este campo"
            />
          </div>
          <button
            type="submit"
            className="submit-btn">
            Registrar
          </button>
        </form>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default RegistrationPage;
