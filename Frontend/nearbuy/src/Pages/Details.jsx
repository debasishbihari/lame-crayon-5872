import { Box, Button, Heading, SkeletonCircle, SkeletonText, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BiCart } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import style from "../Pages/Details.module.css";
import styles from "../Pages/Products.module.css";
import { addToCart } from '../Redux/Cart/Cart.action';
let st=" > "
const Details = () => {
  const dispatch=useDispatch();
  const toast=useToast();
  let cartVal=useSelector((state)=>state.cartsManager);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [images,setImages]=useState([]);
  const[image,setImage]=useState(product.img);
  const[isAbout,setIsAbout]=useState(true);
  const params=useParams();
  let id = Number(params.id);

  const getProduct = async (id) => {
    try {
        setLoading(true)
        let res = await axios.get(`https://nearbuy-mock-server.onrender.com/products/${id}`);
        setLoading(false);
        let data = res.data;

        setProduct(data);
        setImages(data.photos?data.photos:[]);
    } catch (error) {
        setLoading(false);
        console.log(error)
    }
}

const handleCart=(product)=>{
   dispatch(addToCart(product));
   
}



useEffect(() => {
  getProduct(id)
}, []);

// console.log(product);
// console.log(images);
console.log(cartVal);

if (loading) {
  return <div className={styles.skeleton}>
  <Box padding='6' boxShadow='lg'>
      <SkeletonCircle size='10' />
      <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

  </Box>
  <Box padding='6' boxShadow='lg' >
      <SkeletonCircle size='10' />
      <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

  </Box>
  <Box padding='6' boxShadow='lg' >
      <SkeletonCircle size='10' />
      <SkeletonText mt='4' noOfLines={7} spacing='4' skeletonHeight='2' />

  </Box>
  </div>
}

 else if(cartVal.isAdded){
  toast({
    title: 'Cart Success.',
    description: "Item added to cart.",
    status: 'success',
    duration: 4000,
    isClosable: true,
  })
 }

 else if(cartVal.isError){
  toast({
    title: 'Cart Error.',
    description: "Item already Exists in cart",
    status: 'error',
    duration: 4000,
    isClosable: true,
  })
 }

  return (
    <div className={style.DetailCont}>
      <h1 className={styles.tag}> NEARBUY {st} DEALS IN BHUBANESWAR {st} {localStorage.getItem("actualType").toUpperCase()} {st} {localStorage.getItem("dealName").toUpperCase()} </h1>
      <div className={style.topCont}>
         <div className={style.nameAdd}>
            <h3 className={style.heading}>{product.name}</h3>
           
            
            <p style={{"color":"gray"}}>{product.address}</p>
         </div>
         <div className={style.images}>
          <img src={image?image:product.img} alt={product.name} />
          {images.length>0?<img src={images[0]} alt="image" />:null }
         </div>
      </div>
      <div className={style.buttomCont}>
          <div className={style.btns}>
             <button style={isAbout?{"backgroundColor":"#D1D1D1"}:null} onClick={()=>setIsAbout(true)}>About</button>
             <button style={!isAbout?{"backgroundColor":"#D1D1D1"}:null} onClick={()=>setIsAbout(false)}>Photos</button>
          </div>
          <p style={{"color":"gray","fontSize":"17px","padding":"10px","marginTop":"7px"}}>{isAbout?product.name:product.name +" Photos"}</p>
         {
          isAbout? <div className={style.detailBox}>
          <div className={style.detail}>
             <span className={style.type}>{product.type}</span>
             <h3 style={{"fontSize":"20px","fontWeight":"bold","marginTop":"10px"}}>{product.desc}</h3>
             <p style={{"color":"gray"}}>+2 more Deals</p>
             <div style={{"color":"gray","fontSize":"17px","padding":"10px","marginTop":"7px"}}><span> Starts From : </span> <span style={{"fontWeight":"bold","color":"black"}}>₹{product.price}</span></div>
          </div>
          <button className={style.viewBtn} onClick={()=>handleCart(product)}>ADD&nbsp;<BiCart/></button>
  </div>:<div className={style.imageCont}>
                <img src={product.img} alt="img" onClick={()=>setImage(product.img)}/>
                {
                  images.length>0?images.map((image,ind)=><img src={image} key={ind} onClick={()=>setImage(image)}/>):null
                }
          </div> 
         }
          
      </div>
    </div>
  )
}

export default Details