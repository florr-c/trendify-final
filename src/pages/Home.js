import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebaseConfig";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        price: parseFloat(doc.data().price),
        description: doc.data().description,
        sku: doc.data().sku,
        image: doc.data().image,
      }));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <div className="banner"></div>

      <div className="title">
        <h1>Descubre nuestros productos!</h1>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
            sku={product.sku}
          />
        ))}
      </div>

      <div className="banner2"></div>

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
