import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Product = ({ id, img, name, price }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <div className="product swiper-slide">
        <div className="icons">
          <span onClick={() => increaseCartQuantity(id)}>
            <i className="fa-solid fa-cart-plus"></i>
          </span>
          <span>
            <i className="fa-solid fa-heart"></i>
          </span>
          <span>
            <i className="fa-solid fa-share"></i>
          </span>
        </div>

        <div className="img_product">
          <img src={img} alt="" />
        </div>

        <h3 className="name_product">
          <a href="#">{name}</a>
          <span>$ {price}</span>
        </h3>

        <div className="stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>

        
        <div className="prodbtn">
          {quantity > 0 ? (
            <>
              <button
                className="bg-green-400 w-5"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
              <span> {quantity} in cart </span>
              <button
                className="bg-green-400 w-5"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
            </>
          ) : null}
          <button
            className="block  bg-green-500 mt-4 addbtn"
            onClick={() => increaseCartQuantity(id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
