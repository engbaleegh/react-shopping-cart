import React from "react";
import Products from "../data/Products.json"
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({id, quantity}) => {
  const {removeFromCart} = useShoppingCart();
  const prod = Products.find((item) => item.id === id)
  if (prod == null) return null

  return (
    <>
      <li className="flex py-6 ">
        <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            alt=""
            src={prod.img}
            className="size-full object-cover"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a >{prod.name}</a>
              </h3>
              <p className="ml-4">$ {prod.price * quantity} </p>
            </div>
          </div>
          <p>$ {prod.price} </p>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">Qty {quantity}</p>

            <div className="flex">
              <button
                type="button"
                onClick={() => removeFromCart(id)}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
