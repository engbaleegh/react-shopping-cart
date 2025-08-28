import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import About from "./components/About";
import ShoppingCartProvider from "./context/ShoppingCartContext";

const App = () => {

  return (
    <>
      <ShoppingCartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
