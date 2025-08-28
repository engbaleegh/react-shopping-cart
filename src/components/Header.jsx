import React from "react";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Header = () => {
  const { openCart, cartQuantity, setSearchTerm } = useShoppingCart();
  return (
    <>
      <header>
        <div className="container top-nav">
          <a href="#" className="logo">
            <img src="/images/ltlogo.png" alt="" />
          </a>
          <form action="" className="search">
            <input
              type="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for products..."
            />
          </form>

          <div className="cart_header">
            <div onClick={openCart} className="icon_cart">
              <i className="fa-solid fa-bag-shopping"></i>
              <span className="count_item"> {cartQuantity} </span>
            </div>
          </div>
        </div>

        <nav>
          <div className="links container">
            <ul id="menu">
              <li>
                <NavLink to={"/"}>home</NavLink>
              </li>
              <li>
                <NavLink to={"/allproducts"}>all products</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>about us</NavLink>
              </li>
            </ul>

            <div className="loging_signup">
              <a href="#">
                login <i className="fa-solid fa-right-to-bracket"></i>
              </a>
              <a href="#">
                sign up <i className="fa-solid fa-user-plus"></i>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
