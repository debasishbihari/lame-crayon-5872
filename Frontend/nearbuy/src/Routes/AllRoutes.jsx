import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import ActivitiesDeal from "../Pages/ActivitiesDeal";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Details from "../Pages/Details";
import GiftCards from "../Pages/GiftCards";
import Health from "../Pages/Health";
import Home from "../Pages/Home";

import Products from "../Pages/Products";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignIn/SignUp";
import PrivateRoute from "./PrivateRoute";






function Router() {
  return (
    < div>
      <Routes  >
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/health" element={<Health/>} />
        <Route path="/giftcards" element={<GiftCards/>} />
        <Route path="/activitiesdeal" element={<ActivitiesDeal/>} />

        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}
export default Router;