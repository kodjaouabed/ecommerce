import React, { useEffect, useState } from 'react'
import "./Products.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import { AddToCart } from './cartAction'
import { useDispatch,useSelector } from 'react-redux'



import axios from "axios"


export default function Products() {
  const [products,setproducts]=useState([])
  const dispatch=useDispatch()
  useEffect(()=>{
     axios.get("https://ecommerce-vert-nine-78.vercel.app/").then((res)=>setproducts(res.data)).catch((err)=>{console.log(err)})
  },[])
  return (
    <div className='ProductsContainer'>
       <div className='ProductsContainerFirst'>
           {
            products.map((product,key)=>{
              return(
                
          <div key={key}>
             <p><FontAwesomeIcon icon={faHeart} style={{fontSize:"20px",textAlign:"left",marginLeft:"20px"}}/></p>
             <img src={`../images/products/${product.imageProduct}`} alt="" />
             <h6>{product.nameProduct} <span>{product.priceProduct+"$"}</span>
             <p>
              <FontAwesomeIcon icon={faShoppingBag} style={{fontSize:"20px",textAlign:"left",marginLeft:"20px",color:"rgb(194, 7, 7)",cursor:"pointer"}} onClick={()=>{dispatch(AddToCart(product))}} />
              </p>
             </h6>
             </div>
              )
            })
           }
       </div>
    </div>
  )
}
