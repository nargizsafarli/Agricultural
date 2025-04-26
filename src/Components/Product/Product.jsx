import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/features/auth/productSlice';
import prod from "./Product.module.css"

function Product() {
  const dispatch=useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={prod.container}>
    {products.map((product) => (
      <div key={product.id} className={prod.item}>
        <img src={product.img}/>
        <h3>{product.name}</h3>
        <p>{product.price} $</p>
      </div>
    ))}
  </div>
  )
}

export default Product