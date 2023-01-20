import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import ActivitiesDeal from "../Pages/ActivitiesDeal";
import Checkout from "../Pages/Checkout";
import GiftCards from "../Pages/GiftCards";
import Health from "../Pages/Health";
import Home from "../Pages/Home";

import Products from "../Pages/Products";

import Login from "../Pages/SignIn/Login";
import SignUp from "../Pages/SignIn/SignUp";


function Router() {
  return (
    < div >
      <Routes  >
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/health" element={<Health/>} />
        <Route path="/giftcards" element={<GiftCards/>} />
        <Route path="/activitiesdeal" element={<ActivitiesDeal/>} />

        <Route path="/products" element={<Products/>}/>

        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </div>
  );
}
export default Router;