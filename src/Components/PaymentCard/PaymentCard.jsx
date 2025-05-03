import React from "react";
import "./PaymentCard.css";

const PaymentCard = ({ cardData, setCardData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  return (
    <div className="card-overlay">
      <div className="card-container">
      
        <input
        className="paymentInput"
          type="text"
          name="name"
          placeholder="Cardholder Name"
          value={cardData.name}
          onChange={handleChange}
          required
        />
        <input
         className="paymentInput"
          type="text"
          name="number"
          placeholder="Card Number"
          maxLength="16"
          value={cardData.number}
          onChange={handleChange}
          required
        />
        <div className="card-row">
          <input
           className="paymentInput"
            type="text"
            name="expiry"
            placeholder="MM/YY"
            maxLength="5"
            value={cardData.expiry}
            onChange={handleChange}
            required
          />
          <input
           className="paymentInput"
            type="text"
            name="cvc"
            placeholder="CVC"
            maxLength="3"
            value={cardData.cvc}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
