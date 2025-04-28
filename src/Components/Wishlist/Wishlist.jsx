import React from 'react';
import { useSelector } from 'react-redux';

function Wishlist() {
  const {  wishlistItems } = useSelector((state) => state.wishlist);
  console.log(wishlistItems);
  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <div>
          { wishlistItems.map((product) => (
            <div key={product.id}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} $</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
}

export default Wishlist;
