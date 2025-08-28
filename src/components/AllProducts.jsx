import React from "react";
import Products from "../data/Products.json";
import Product from "./Product";
import { useShoppingCart } from '../context/ShoppingCartContext';
const AllProducts = () => {
  const {searchTerm} = useShoppingCart()
  return (
    <>
      <section className="all_products">
        <h1 className="top_page">All Products</h1>
        <div className="container">
          <div id="products_dev" className="products_dev">
            {Products.filter((prod) => (
              prod.name.toLowerCase().includes(searchTerm.toLowerCase())
            )).map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
