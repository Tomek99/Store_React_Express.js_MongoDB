import React from "react";
import styles from "./OrderDetailsProductsOrdered.module.scss";
import OrderDetailsProductOrdered from "./OrderDetailsProductOrdered/OrderDetailsProductOrdered";

function OrderDetailsProductsOrdered({ data }) {
  return (
    <div className={styles.OrderDetailsProductsOrdered}>
      <h1 className={styles.title}>Products ordered</h1>
      <div className={styles.divProducts}>
        {data.map((item) => (
          <OrderDetailsProductOrdered item={item} />
        ))}
      </div>
    </div>
  );
}

export default OrderDetailsProductsOrdered;
