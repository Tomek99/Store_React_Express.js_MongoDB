import React, { useState } from "react";
import styles from "./AdminProduct.module.scss";
import AdminActionBtns from "./AdminActionBtns/AdminActionBtns";
import AdminProductDetails from "./AdminProductDetails/AdminProductDetails";

function AdminProduct({ product }) {
  const [isAdminProductDetailsDisplayed, setIsAdminProductDetailsDisplayed] =
    useState(false);

  function handleAdminProductDetails() {
    setIsAdminProductDetailsDisplayed(!isAdminProductDetailsDisplayed);
  }
  return (
    <section className={styles.AdminProduct}>
      <div className={styles.singleProduct}>
        <img
          src={product.imageUrl}
          className={styles.singleProductImg}
          alt={product.name}
        />
        <div className={styles.productContent}>
          <span>
            <b>ID:{product._id}</b>
          </span>
          <span>{product.name}</span>
          <span>
            ${product.price}{" "}
            {product.oldPrice === null ? null : `- $${product.oldPrice}`}
          </span>
        </div>
        <AdminActionBtns
          handleAdminProductDetails={handleAdminProductDetails}
        />
      </div>
      {isAdminProductDetailsDisplayed ? (
        <AdminProductDetails productDetails={product} />
      ) : null}
    </section>
  );
}

export default AdminProduct;
