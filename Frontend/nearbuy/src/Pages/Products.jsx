import { Button, Container, FormControl, Heading, Select } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import styles from "../Pages/Products.module.css";
import { getProducts } from '../Redux/Products/Products.action';
import Skeleton from '../components/Skeleton';
import ProductCard from '../components/ProductCard';
import DataNotFound from '../components/DataNotFound';

let st=">";
const Products = () => {
    const [order, setOrder] = useState("");
    const[type,setType]=useState("");
    const [sort,setSort]=useState(""); 
    const[all,setAll]=useState(false);
    const handlePrice=(e)=>{
        setSort("price");
        setOrder(e.target.value);
    }

    const handleBought=(e)=>{
        setSort("bCount");
        setOrder(e.target.value);
    }

    const handleType=(e)=>{
       setType(e.target.value);
    }

    const handleAll=()=>{
        
        setAll(true) ;
    }

    let typeFilter=localStorage.getItem("typeFilter") || "";
     

    const getUrl=(order,typeFilter,type,sort,all)=>{
        let baseUrl=`https://nearbuy-mock-server.onrender.com/products?typeFilter=${typeFilter}`;

         if(all && sort && order && type){
            baseUrl=`https://nearbuy-mock-server.onrender.com/products?_sort=${sort}&_order=${order}&type=${type}` ;
        }

        else if(all && sort && order ){
            baseUrl=`https://nearbuy-mock-server.onrender.com/products?_sort=${sort}&_order=${order}` ;
        }

        else if(all && sort  && type){
            baseUrl=`https://nearbuy-mock-server.onrender.com/products?_sort=${sort}&type=${type}` ;
        }

        else if(all &&  order && type){
            baseUrl=`https://nearbuy-mock-server.onrender.com/products?_order=${order}&type=${type}` ;
        }
       
       else if(sort && order && type){
            baseUrl=`${baseUrl}&_sort=${sort}&_order=${order}&type=${type}` ;
        }

        else if(sort && order){
            baseUrl=`${baseUrl}&_sort=${sort}&_order=${order}` ;
        }
        else if(type && order){
            baseUrl=`${baseUrl}&type=${type}&_order=${order}` ;
        }
        else if(sort && type){
            baseUrl=`${baseUrl}&_sort=${sort}&type=${type}` ;
        }
        else if(sort){
            baseUrl=`${baseUrl}&_sort=${sort}`
        }
        else if(order){
            baseUrl=`${baseUrl}&_order=${order}`
        }
        else if(type){
            baseUrl=`${baseUrl}&type=${type}`
        }
        else if(all){
            baseUrl="https://nearbuy-mock-server.onrender.com/products" ;
            
        }

        return baseUrl;
    }


    const dispatch = useDispatch();
    const data = useSelector((state) => state.productsManager);

    console.log(data);

    useEffect(()=>{
        let url=getUrl(order,typeFilter,type,sort,all);
        dispatch(getProducts(url));
    },[dispatch,order,typeFilter,type,sort,all]);

    if(data.loading){
      return <Skeleton/>
    }

    else if((type || typeFilter || sort) &&  data.products.length===0){
        
        return  <DataNotFound/>
       
    }
   
  return (
    <div className={styles.productCont}>
       <h1 className={styles.tag}> NEARBUY {st} DEALS IN BHUBANESWAR {st} {localStorage.getItem("actualType").toUpperCase()} </h1>

       <div className={styles.prodMain}>

        <div className={styles.leftCont}>
        <FormControl>
                            <Select variant='filled' onChange={handlePrice} placeholder="Sort by price" fontSize={20} borderColor='gray.400' style={{"fontSize":"17px"}}>
                                
                                <option value="asc">Price (Low to High) </option>
                                
                                <option value="desc">Price (High to Low) </option>

                            </Select>
                        </FormControl>
                        <FormControl>
                            <Select variant='filled' onChange={handleBought} placeholder="Sort by bought No" fontSize={20} borderColor='gray.400' style={{"fontSize":"17px"}}>
                                
                                <option value="asc">0 - 999</option>
                                
                                <option value="desc">999 - 0 </option>

                            </Select>
                        </FormControl>
                        <FormControl>
                        <Select variant='filled' onChange={handleType} placeholder="Choose Category" fontSize={20} borderColor='gray.400' style={{"fontSize":"17px"}}>
                                <option value='VIEW'>VIEW</option>
                                <option value='DEALS'>DEALS</option>
                                <option value='GIFT CARDS'>GIFT CARDS</option>

                            </Select>
                        </FormControl>
        </div>
        <div className={styles.products}>
            {
                data.products?.map((product)=>{
                    return <ProductCard key={product.id} product={product}/>
                })
            }
        </div>
           
       </div>
       <br />
       <br />
       <div>
       {
        !all?<Button  colorScheme='blue' variant='outline' px={"10"} py={"5"} borderRadius="20" onClick={handleAll} mb={"20px"}>
        VIEW ALL 
              </Button>:null
       }
       </div>


    </div>
  )
}

export default Products