import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles.css"; 

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]); 

  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.log("Error fetching product:", error);
      });

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setRelatedProducts(data.slice(0, 5))) 
      .catch((error) => {
        console.log("Error fetching related products:", error);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="app-container product-detail-page">
      <div className="product-detail">
        <div className="product-detail-left">
          <img
            src={product.image}
            alt={product.title}
            className="product-detail"
          />
        </div>
        <div className="product-detail-right">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button
            className="buy-now"
            onClick={() => alert("Producto comprado!")}
          >
            Comprar
          </button>
        </div>
      </div>

      <div className="related-products-line">
        <h2>Productos relacionados</h2>
        <div className="product-grid">
          {relatedProducts.map((product) => (
            <div key={product.id} className="product-card product-card-detail">
              <img
                src={product.image}
                alt={product.title}
                className="product-card-image"
              />
              <h3 className="product-card-title">{product.title}</h3>
              <p className="product-card-price">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
  <p>© 2025 E-Commerce Trendify | Todos los derechos reservados</p>
  <p>
    <a href="/about">Sobre Nosotros</a> | <a href="/contact">Contacto</a>
  </p>
</footer>
    </div>
  );
};

export default ProductDetail;








