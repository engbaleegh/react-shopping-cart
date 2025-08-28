import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import products from "../data/Products.json";
import Product from "./Product";
import { useShoppingCart } from '../context/ShoppingCartContext';
const Home = () => {
  const {searchTerm} = useShoppingCart()
  return (
    <div className="container p-5">
      <Swiper
      className="custom-swiper"
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={
        {
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }
      }
      
      >
      {products.filter((prod) => (
        prod.name.toLowerCase().includes(searchTerm.toLowerCase())
      )).map((item) => (
        <SwiperSlide key={item.id} >
          <Product {...item} />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default Home;
