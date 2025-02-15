import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, image, price, description, sku }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card">
      <img
        src={`/images/${image}`}
        alt={title}
      />
      <h3>{title}</h3>

      <p className="description">{description}</p>
      <p style={{ paddingBottom: "12px", paddingTop: "12px" }}> {sku}</p>
      <p style={{ fontSize: "20px" }}>
        <strong> ${price}</strong>
      </p>

      <button onClick={() => navigate(`/product/${id}`)}>Ver Detalles</button>
    </div>
  );
};

export default ProductCard;
