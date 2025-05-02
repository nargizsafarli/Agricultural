import React from 'react';
import { Modal } from "antd";

function Detail({ isModalOpen, handleCancel, selectedProduct }) {
  return (
    <Modal
      title="Product Detail"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      style={{ top: 140 }}
    >
      {selectedProduct && (
        <div>
          <img
            src={selectedProduct.img}
            alt={selectedProduct.name}
            style={{ width: "200px", borderRadius: "8px" }}
          />
          <h2>{selectedProduct.name}</h2>
          <p><strong>Category:</strong> {selectedProduct.category}</p>
          <p><strong>Description:</strong>{selectedProduct.description}</p>
          <p>
            <strong>Price:</strong>{" "}
            {selectedProduct.is_discount
              ? selectedProduct.discount_price
              : selectedProduct.price} $
          </p>
          {selectedProduct.is_discount && (
            <p>
              <strong>Old Price:</strong>{" "}
              <del>{selectedProduct.price} $</del>
            </p>
          )}
          <p>
            <strong>Status:</strong>{" "}
            {selectedProduct.is_stock ? "In Stock" : "Not Available"}
          </p>
        </div>
      )}
    </Modal>
  );
}

export default Detail;
