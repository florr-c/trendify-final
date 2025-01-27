import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=15")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="home">
     
      <div className="banner">
       {/*  <h2>¡Descubre los productos más populares!</h2>
        <p>Encuentra lo que buscas al mejor precio</p> */}
      </div>

      
       <div className="title">
        <h1>Descubre nuestro productos!</h1>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>

      <div className="banner2">
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

export default Home;






