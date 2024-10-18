import React, { useEffect, useState } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";

const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const { firmId, firmName } = useParams();


  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProductData = await response.json();
      setProducts(newProductData.products || []);
    } catch (error) {
      alert("Failed to fetch data");
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    productHandler();
  }, []);

  return (
    <>
    <TopBar />
      <section className="productSection">
        <h2>{firmName}</h2>
        {products.map((item) => {
          return (
            <div className="productBox">
              <div>
                <div><b>{item.productName}</b></div>
                <div>₹{item.price}</div>
                <div>{item.description}</div>
              </div>
              <div className="productGroup">
                <img
                  src={`${API_URL}/uploads/${item.image}`}
                  alt={item.firmName}
                />
                <div className="addButton">
                  <b>ADD</b>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductMenu;
