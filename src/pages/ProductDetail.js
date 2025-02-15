import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, doc, getDoc, collection, getDocs } from "../firebaseConfig";

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
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", id);
        const docSnap = await getDoc(productRef);
        if (docSnap.exists()) {
          const productData = docSnap.data();
          setProduct({
            id: docSnap.id,
            title: productData.title,
            price: parseFloat(productData.price),
            description: productData.description,
            sku: productData.sku,
            image: productData.image,
          });
        } else {
          console.log("No hay productos!");
        }
      } catch (error) {
        console.log("Error ", error);
      }
    };

    const fetchRelatedProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const querySnapshot = await getDocs(productsRef);
        const productsData = querySnapshot.docs.map((doc) => doc.data());
        setRelatedProducts(productsData.slice(0, 5));
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchProduct();
    fetchRelatedProducts();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="app-container product-detail-page">
      <div className="product-detail">
        <div className="product-detail-left">
          <img
            src={`/images/${product.image}`}
            alt={product.title}
            className="product-detail-image"
          />
        </div>
        <div className="product-detail-right">
          <h1>{product.title}</h1>
          <p className="product-sku">
            <strong>{`${product.sku}`}</strong>{" "}
          </p>
          <p>{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button
            className="buy-now"
            onClick={() => alert("Producto comprado!")}>
            Comprar
          </button>
        </div>
      </div>

      <div className="related-products-line">
        <h2>Productos relacionados</h2>
        <div className="product-grid">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="product-card product-card-detail">
              <img
                src={`/images/${relatedProduct.image}`}
                alt={relatedProduct.title}
                className="product-card-image"
              />
              <h3 className="product-card-title">{relatedProduct.title}</h3>
              <p className="product-card-price">${relatedProduct.price}</p>
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
