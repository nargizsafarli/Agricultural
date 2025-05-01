import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Basket.module.css";
import { decreaseQuantity, increaseQuantity } from "../../redux/features/auth/basketSlice";

function Basket() {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  console.log(basketItems);

  return (
    <div className={styles.basketContainer}>
      <h2>Səbət</h2>
      {basketItems.length === 0 ? (
        <p>Səbət boşdur</p>
      ) : (
        <div className={styles.itemsWrapper}>
          {basketItems.map((item) => {
            const price = item.is_discount ? item.discount_price : item.price;
            const itemTotal = price * item.quantity;

            return (
              <div key={item.id} className={styles.itemCard}>
                <img src={item.img} alt={item.title} className={styles.image} />
                <div className={styles.details}>
                  <h4>{item.name}</h4>
                  <div className={styles.quantityControls}>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                </div>
                <div className={styles.price}>
                  {itemTotal.toFixed(2)} ₼
                </div>
              </div>
            );
          })}
          <div className={styles.total}>
            <h3>Total price: {totalPrice.toFixed(2)} ₼</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
