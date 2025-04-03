import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import ShopCategory from "./Pages/ShopCategory"
import Shop from "./Pages/Shop"
import Product from "./Pages/Product"
import LoginSignup from "./Pages/LoginSignup"
import Cart from "./Pages/Cart"
import Footer from "./Components/Footer/Footer"
import banner_men from "./Components/Assets/banner_mens.png"
import banner_women from "./Components/Assets/banner_women.png"
import banner_kid from "./Components/Assets/banner_kids.png"


function App() {
  
  return (
    
    <>
      <BrowserRouter>
         <Navbar/>  
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/men" element={<ShopCategory category="men" banner={banner_men} />}></Route>
          <Route path="/women" element={<ShopCategory category="women" banner={banner_women} />}></Route>
          <Route path="/kid" element={<ShopCategory category="kid" banner={banner_kid} />}></Route>
          <Route path="/product" element={<Product/>}>
             <Route path=":productId" element={<Product/>}></Route>
          </Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<LoginSignup/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
