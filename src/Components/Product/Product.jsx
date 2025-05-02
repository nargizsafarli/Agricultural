import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/auth/productSlice";
import prod from "./Product.module.css";
import { Modal } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/features/auth/wishlistSice";
import {
  addToBasket,
  removeFromBasket,
} from "../../redux/features/auth/basketSlice";
import Swal from "sweetalert2";
import Detail from "../DetailProduct/Detail";

function Product() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const basketItems = useSelector((state) => state.basket.items);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [inStock, setInStock] = useState(null);
  const [isDiscount, setIsDiscount] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [basketProducts, setBasketProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleLike = (product) => {
    if (wishlistItems.some((item) => item.id === product.id)) {
      dispatch(removeFromWishlist(product.id));
      Swal.fire({
        icon: "info",
        title: "Removed from Wishlist",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      dispatch(addToWishlist(product));
      Swal.fire({
        icon: "success",
        title: "Added to Wishlist!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const handleBasket = (product) => {
    const isInBasket = basketItems.some((item) => item.id === product.id);

    if (isInBasket) {
      dispatch(removeFromBasket(product.id));
      Swal.fire({
        icon: "info",
        title: "Removed from Basket",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      dispatch(addToBasket(product));
      Swal.fire({
        icon: "success",
        title: "Added to Basket!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const minPrice =
    products.length > 0 ? Math.min(...products.map((p) => p.price)) : 0;
  const maxPrice =
    products.length > 0 ? Math.max(...products.map((p) => p.price)) : 100;

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchStock = inStock === null || product.is_stock === inStock;
    const matchDiscount = !isDiscount || product.is_discount === true;
    const matchPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return (
      matchSearch && matchCategory && matchStock && matchDiscount && matchPrice
    );
  });

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleStockChange = (value) => {
    setInStock((prev) => (prev === value ? null : value));
  };

  const handleDiscountChange = () => {
    setIsDiscount((prev) => !prev);
  };

  const handleMinPriceChange = (e) => {
    const value = +e.target.value;
    setPriceRange((prev) => [value, prev[1]]);
  };

  const handleMaxPriceChange = (e) => {
    const value = +e.target.value;
    setPriceRange((prev) => [prev[0], value]);
  };

  return (
    <div className={prod.container}>
      <div className={prod.sidebar}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={prod.searchInput}
        />

        <div className={prod.filterSection}>
          <h4>Categories</h4>
          <div className={prod.categoryList}>
            {categories.map((category) => (
              <label key={category}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        <div className={prod.filterSection}>
          <h4>Stock</h4>
          <label>
            <input
              type="checkbox"
              checked={inStock === true}
              onChange={() => handleStockChange(true)}
            />
            Available
          </label>
          <label>
            <input
              type="checkbox"
              checked={inStock === false}
              onChange={() => handleStockChange(false)}
            />
            Not Available
          </label>
        </div>

        <div className={prod.filterSection}>
          <h4>Discount</h4>
          <label>
            <input
              type="checkbox"
              checked={isDiscount}
              onChange={handleDiscountChange}
            />
            Has Discount
          </label>
        </div>

        <div className={prod.filterSection}>
          <h4>Price Range</h4>
          <div className={prod.rangeInputs}>
            <div>
              <label>Min: </label>
              <input
                type="range"
                min={minPrice}
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={handleMinPriceChange}
              />
              <span>{priceRange[0]}$</span>
            </div>
            <div>
              <label>Max: </label>
              <input
                type="range"
                min={priceRange[0]}
                max={maxPrice}
                value={priceRange[1]}
                onChange={handleMaxPriceChange}
              />
              <span>{priceRange[1]}$</span>
            </div>
          </div>
        </div>
      </div>

      <div className={prod.products}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`${prod.item} ${
                !product.is_stock ? prod.outOfStock : ""
              }`}
            >
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p className={prod.categoryName}>{product.category}</p>
              {product.is_discount ? (
                <div className={prod.priceSection}>
                  <span className={prod.discountPrice}>
                    {product.discount_price} $
                  </span>
                  <span className={prod.oldPrice}>{product.price} $</span>
                </div>
              ) : (
                <p className={prod.normalPrice}>{product.price} $</p>
              )}

              {/* <div className={prod.icons}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`${prod.iconButton} ${
                    likedProducts.includes(product.id) ? prod.active : ""
                  }`}
                  onClick={() => handleLike(product)}
                />
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className={`${prod.iconButton} ${
                    basketProducts.includes(product.id) ? prod.active : ""
                  }`}
                  onClick={() => handleBasket(product)}
                />
                <FontAwesomeIcon icon={faEye} className={prod.iconButton} />
              </div> */}
              <div className={prod.icons}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`${prod.iconButton} ${
                    wishlistItems.some((item) => item.id === product.id)
                      ? prod.active
                      : ""
                  }`}
                  onClick={() => handleLike(product)}
                />
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className={`${prod.iconButton} ${
                    basketItems.some((item) => item.id === product.id)
                      ? prod.active
                      : ""
                  }`}
                  onClick={() => handleBasket(product)}
                />
                <FontAwesomeIcon
                  icon={faEye}
                  className={prod.iconButton}
                  onClick={() => showModal(product)}
                />
              </div>
            </div>
          ))
        ) : (
          <div className={prod.noProduct}>
            <p>Filtrə uyğun məhsul tapılmadı.</p>
          </div>
        )}
      </div>
      <Detail
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}

export default Product;
