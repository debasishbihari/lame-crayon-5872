import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import ActivitiesDeal from "../Pages/ActivitiesDeal";
import GiftCards from "../Pages/GiftCards";
import Health from "../Pages/Health";
import Home from "../Pages/Home";
import Products from "../Pages/Products";

function Router() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/health" element={<Health/>} />
        <Route path="/giftcards" element={<GiftCards/>} />
        <Route path="/activitiesdeal" element={<ActivitiesDeal/>} />
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </>
  );
}
export default Router;