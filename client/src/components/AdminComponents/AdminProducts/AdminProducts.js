import React, { useEffect, useState } from "react";
import styles from "./AdminProducts.module.scss";
import axios from "axios";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import AdminSingleProduct from "./AdminSingleProduct/AdminSingleProduct";

function AdminProducts() {
  const [isLoaded, setLoading] = useState(true);
  const [products, setProducts] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const products = await axios.get(
          `${process.env.REACT_APP_API_URI}/api/products`
        );
        setLoading(false);
        setProducts(products.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoaded ? (
    <LoaderSpinner />
  ) : (
    <div className={styles.AdminProducts}>
      {products.map((product, index) => (
        <AdminSingleProduct product={product} key={index} />
      ))}
    </div>
  );
}

export default AdminProducts;
