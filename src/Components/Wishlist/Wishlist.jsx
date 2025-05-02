import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../redux/features/auth/basketSlice';
import { removeFromWishlist } from '../../redux/features/auth/wishlistSice';
import wish from "./WishList.module.css"
import Swal from 'sweetalert2';

function Wishlist() {
  const {  wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch=useDispatch();
  const handleBask=(product)=>{
    dispatch(addToBasket(product));
     Swal.fire({
            icon: "success",
            title: "Added to Basket!",
            showConfirmButton: false,
            timer: 1000,
          });

  }
  const handleRemove=(id)=>{
    dispatch(removeFromWishlist(id));
    Swal.fire({
      icon: "success",
      title: "Remove from wishlist!",
      showConfirmButton: false,
      timer: 1000,
    });
  }
  
  console.log(wishlistItems);
  return (
    <div className={wish.container}>
      <h2>Your Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <div className={wish.list}>
        <div> </div>
          { wishlistItems.map((product) => (
            <div key={product.id} className={wish.item}>
              <button onClick={()=>{handleRemove(product.id)}} className={wish.add}>X</button>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} $</p>
              <button onClick={()=>{handleBask(product)}} className={wish.add}>ADD TO BASKET</button>
            </div>
          ))}
        </div>
      ) : (
        <p className={wish.empty}>Your wishlist is empty.</p>
      )}
    </div>
  );
}

export default Wishlist;
