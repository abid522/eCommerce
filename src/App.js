import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
