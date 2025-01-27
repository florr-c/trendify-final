import React from "react";
import { useNavigate } from "react-router-dom"; 

const ProductCard = ({ id, title, image, price }) => {
  const navigate = useNavigate(); 
  return (
    <div className="product-card">
      <img
        src={image}
        alt={title}
      />
      <h3>{title}</h3>
      <p>${price}</p>
      <button
        onClick={() => navigate(`/product/${id}`)} 
      >
        Ver Detalles
      </button>
    </div>
  );
};

export default ProductCard;



