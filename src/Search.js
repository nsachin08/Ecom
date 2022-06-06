import React, { useState, useEffect } from "react";

function Search() {
  var q = window.location.pathname;
  var query = q.slice(8);

  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      var url = `http://localhost:8081/search/${query}`;
      const response = await fetch(url);
      setData(await response.clone().json());
      return () => {};
    };
    getProducts();
  }, [data]);

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
}

export default Search;
