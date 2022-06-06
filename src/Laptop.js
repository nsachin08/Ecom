import React, { useState, useEffect } from "react";
import "./Product.css";

const Product = () => {
  const [data, setData] = useState([]);

  let componentsMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:8081/categories/Laptops");

      if (componentsMounted) {
        setData(await response.clone().json());
      }

      return () => {};
    };
    getProducts();
  }, []);

  const ShowProducts = () => {
    return (
      <div className="Products">
        {data.map((product) => {
          return (
            <div className="product">
              <img className="product__image" src={product.images}></img>
              <h5 className="product__title">{product.title}</h5>
              <p className="product__price">{product.price}</p>
              <button className="product__button">Buy Now</button>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container">
      <div>
        <ShowProducts></ShowProducts>
      </div>
    </div>
  );
};

export default Product;
