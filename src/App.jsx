import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
import Eligibility from "./Pages/Eligibility";
import DonateBlood from "./Pages/DonateBlood";
import DonationForCancer from "./Pages/DonationForCancer";
import NavBar from "./Components/Home/NavBar";
import Home from "./Pages/Home";
import Purchase from "./Pages/Pucrhase";
import { useState } from "react";
import Cart from "./Pages/Cart";
function App() {
  
  const [cart, setCart] = useState([])
  const addtocart = (product) =>
    {
      console.log("helloooooo")
      const exist = cart.find((x) => {
        return x.id === product.id
      })
      if(exist)
      {
        alert("This product is already added in cart")
      }
      else
      {
        setCart([...cart, {...product, qty:1}])
        alert("Added to Cart")
      }
      console.log(cart);
    }
  return (
    <>
    <Router>
    <NavBar/> 
      <Routes>
        <Route path="/" element={<Home addtocart={addtocart} />} />
        <Route path="/el" element={<Eligibility />} />
        <Route path="/DonateBlood" element={<DonateBlood/>} />
        <Route path="/purchase" element={<Purchase  addtocart={addtocart}  />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path="/DonateForCancer" element={<DonationForCancer/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
