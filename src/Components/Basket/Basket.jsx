import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Basket.module.css";
import { decreaseQuantity, increaseQuantity } from "../../redux/features/auth/basketSlice";
import { NavLink, useNavigate } from "react-router-dom";
import PaymentCard from "../PaymentCard/PaymentCard";
import { Button, Modal } from "antd";
import Swal from "sweetalert2";

function Basket() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  console.log(basketItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: ""
  });


  const showModal = () => setIsModalOpen(true);
  const handleOk = () => {
    const { name, number, expiry, cvc } = cardData;
  
    // Əgər hər hansı input boşdursa xəbərdarlıq göstər
    if (!name || !number || !expiry || !cvc) {
      Swal.fire({
        icon: "warning",
        title: "Please fill in all fields",
        confirmButtonText: "OK"
      });
      return;
    }
  
    // Əgər bütün sahələr doludursa, ödənişi tamamla
    Swal.fire({
      icon: "success",
      title: "Order Completed",
      showConfirmButton: false,
      timer: 2000
    });
  
    setIsModalOpen(false);
    setCardData({ name: "", number: "", expiry: "", cvc: "" });
  };

  const handleCancel = () => setIsModalOpen(false);


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

      <div className={styles.shippig}>
      <div className={styles.coupon}>
        <input placeholder="Coupon Code"/>
        <button>APPLY COUPON</button>
        </div>
     <button onClick={()=>navigate("/product")}>CONTINUE SHOPPING</button>
      </div>
      <div className={styles.card}>
      <Button type="primary" onClick={showModal}>
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
        <PaymentCard cardData={cardData} setCardData={setCardData}/>
      </Modal>
      </div>
    </div>
  );
}

export default Basket;
