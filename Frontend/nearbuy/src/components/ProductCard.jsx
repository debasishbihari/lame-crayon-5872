import { Heading } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "../Pages/Products.module.css";
const ProductCard = ({product}) => {

  const navigate=useNavigate();

const handleCard=(product)=>{
     localStorage.setItem("dealName",product.name);
     navigate(`/products/${product.id}`);
}

  return (
    <div className={styles.product} onClick={()=>handleCard(product)}>
        <img src={product.img} alt={product.name}/>
        <div className={styles.prodIn}>
        <p style={{"fontSize":"large","fontWeight":"500","margin":"3px 0px"}}>{product.name}</p>
        <p style={{"margin":"10px 0px","color":"gray"}}>{product.address}</p>
        <div className={styles.types}>
             <p className={styles.typeCol}>{product.type}</p>
             <p style={{"width":"50%"}}>{product.desc}</p>
        </div>
        <p style={{"marginBottom":"20px"}}> ₹ {product.price}</p>
        <p style={{"padding":"4px 15px","backgroundColor":"#EAEAEA ","color":"#888888"}}>{product.bCount?product.bCount:0} Bought</p>
        </div>
    </div>
  )
}

export default ProductCard