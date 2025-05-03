import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Basket.module.css";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromBasket,
  clearBasket
} from "../../redux/features/auth/basketSlice";
import { NavLink, useNavigate } from "react-router-dom";
import PaymentCard from "../PaymentCard/PaymentCard";
import { Button, Modal } from "antd";
import Swal from "sweetalert2";

function Basket() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const user = useSelector((state) => state.auth.user);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === "SPRING20") {
      const discountAmount = totalPrice * 0.2;
      setDiscount(discountAmount);
      Swal.fire({
        icon: "success",
        title: "Coupon applied successfully!",
        text: `20% discount added.`,
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      setDiscount(0);
      Swal.fire({
        icon: "error",
        title: "Invalid Coupon",
        text: "Please enter a valid coupon code.",
      });
    }
  };
  const removeBasket=(item)=>{
    dispatch(removeFromBasket(item.id));
    Swal.fire({
      icon: "info",
      title: "Product removed",
      text: `${item.name} was removed from basket`,
      timer: 1500,
      showConfirmButton: false,
    });

  }

  const showModal = () => setIsModalOpen(true);

  const handleOk = () => {
    const { name, number, expiry, cvc } = cardData;
    if (!name || !number || !expiry || !cvc) {
      Swal.fire({
        icon: "warning",
        title: "Please fill in all fields",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Order Completed",
      showConfirmButton: false,
      timer: 2000,
    });
    dispatch(clearBasket());
    setIsModalOpen(false);
    setCardData({ name: "", number: "", expiry: "", cvc: "" });
  };

  const handleCancel = () => setIsModalOpen(false);

  return (
    <div className={styles.basketContainer}>
      {basketItems.length === 0 ? (
        <p>Basket is empty</p>
      ) : (
        <div className={styles.itemsWrapper}>
          <div className={styles.headerRow}>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>
          {basketItems.map((item) => {
            const price = item.is_discount ? item.discount_price : item.price;
            const itemTotal = price * item.quantity;

            return (
              <div key={item.id} className={styles.itemCard}>
                <div className={styles.productInfo}>
                  <button
                    className={styles.removeBtn}
                   onClick={()=>{removeBasket(item)}}
                  >
                    ❌
                  </button>
                  <img src={item.img} alt={item.name} className={styles.image} />
                  <h4>{item.name}</h4>
                </div>

                <div className={styles.priceInfo}>
                  {item.is_discount ? (
                    <>
                      <div className={styles.discountPrice}>${item.discount_price}</div>
                      <div className={styles.originalPrice}>${item.price}</div>
                    </>
                  ) : (
                    <div className={styles.normalPrice}>${item.price}</div>
                  )}
                </div>

                <div className={styles.quantityControls}>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>

                <div className={styles.price}>${itemTotal.toFixed(2)}</div>
              </div>
            );
          })}
          <div className={styles.total}>
            <h3>Total price: ${totalPrice.toFixed(2)}</h3>
            {discount > 0 && (
              <>
                <h4>Discount: -${discount.toFixed(2)}</h4>
                <h3>Total after discount: ${(totalPrice - discount).toFixed(2)}</h3>
              </>
            )}
          </div>
        </div>
      )}
      
      {basketItems.length > 0 && (
      <div className={styles.shippig}>
        <div className={styles.coupon}>
          <input
          className={styles.cuponCode}
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button onClick={handleApplyCoupon} className={styles.apply}>APPLY COUPON</button>
        </div>
        <button onClick={() => navigate("/product")}  className={styles.continue}>CONTINUE SHOPPING</button>
      </div>
    )}

    {basketItems.length > 0 && (
      <div className={styles.card}>
        <Button type="primary" onClick={showModal} disabled={!user}   className={styles.order}>
          Complete Order
        </Button>
        <Modal
          title="Payment Details"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Pay"
          cancelText="Cancel"
        >
          <PaymentCard cardData={cardData} setCardData={setCardData} />
        </Modal>
      </div>
    )}
    </div>
  );
}

export default Basket;
