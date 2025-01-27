import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa"; 
import "../styles.css";
import logo from "../assets/log.png"; 

const Header = () => {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logo"
        className="header-logo"
      />

      <div className="header-links">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/register" className="header-link">Registrar</Link>
        <Link to="/login" className="header-link">Login</Link>
      </div>

      <div className="header-links">
      <input 
        type="text" 
        placeholder="Buscar..." 
        className="header-search-bar"
      />
        <Link to="/account" className="header-link">
          <FaUser style={{ marginRight: '8px' }} /> Mi Cuenta
        </Link>
        <Link to="/cart" className="header-link">
          <FaShoppingCart style={{ marginRight: '8px' }} /> Carrito
        </Link>
      </div>
    </header>
  );
};

export default Header;



