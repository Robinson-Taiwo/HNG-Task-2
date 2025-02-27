import React from "react";
import heart from "../assets/icons/heart.svg";
import stars from "../assets/icons/stars.svg";
import plus from "../assets/icons/plus.svg";
import minus from "../assets/icons/minus.svg";

import "./ProductCard.css";

const ProductCard = ({
  image,
  size,
  originalPrice,
  oldPrice,
  openCart,
  setOpenCart,
}) => {
  return (
    <div className="ProductCard-container relative  z-10 ">
      <div className="productCard-image relative">
        <img className="pc-image" src={`./images/${image}.png`} alt="" />
        <img className="heart-image" src={heart} alt="" />
      </div>
      <div className="product-card-rate">
        <img className="star-image" src={stars} alt="" />
        {/* <div className="quantity">
                    <img src={minus} alt="" />
                    <p>1</p>
                    <img src={plus} alt="" />
                </div> */}
      </div>
      <div className="product-card-rate">
        <h3>{size}</h3>
        <h6>30 inches</h6>
      </div>
      <div className="original-price laptop:mb-[1rem] mb-[0rem]">
        NGN {originalPrice}
      </div>
      <s className="old-price">NGN {oldPrice}</s>
      <button className="add-to-cart">
        <span>+</span> <span>Add to cart</span>
      </button>
    </div>
  );
};

export default ProductCard;
