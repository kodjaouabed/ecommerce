import React from 'react'
import { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight,faHeart, faShoppingBag, faTrash, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { AddToCart, DeleteToCart ,ModifiyQToCart} from './cartAction';

import "./topBar.css"
export default function TopBar() {
  const cart=useSelector((state)=>state.products)
  const Dispatch=useDispatch()
  const [total,settotal]=useState(0)


  useEffect(() => {
    let newtotal=0
    cart.forEach((element)=> {
      newtotal=newtotal+(element.price*element.quantity)
    });
    settotal(newtotal)
    
  }, [cart]);
  
  return (
    <div className='topBarContainer'>
         <div className='topBarContainerFirst'>
            <h2>FASHION<span>HUB</span></h2>
            <div className='topBarContainerFirstsurchcart'>
                <input type="text" name="" id="" placeholder='search by product'/>
                <div style={{cursor:'pointer'}}><FontAwesomeIcon icon={faShoppingBag} style={{fontSize:"20px"}} onClick={()=>{document.querySelector(".cartContainer").style.marginRight="0px"}}/><span>({cart.length})</span></div>
                <div style={{cursor:'pointer'}}><FontAwesomeIcon icon={faHeart} style={{fontSize:"20px"}}/><span>({})</span></div>
            </div>
         </div>
         <hr />
      <div className='topBarContainerSecond'>
         <Link to="/" style={{color:"rgb(194, 7, 7)"}}>HOME PAGE</Link>
         <a href="">CATEGORY</a>
         <a href="">BRAND</a>
         <a href="">ACCESSORIES</a>
         <a href="">SHOP</a>
         <a href="">BLOG</a>
         <a href="">CONTACT</a>
      </div>


      <div className='cartContainer'>
        <div style={{display:"flex",justifyContent:'space-between',alignItems:"center",paddingLeft:30,paddingRight:30,paddingTop:10,marginBottom:20}}>
          <div style={{cursor:'pointer'}}><FontAwesomeIcon icon={faShoppingBag} style={{fontSize:"20px"}} onClick={()=>{document.querySelector(".cartContainer").style.marginRight="0px"}}/><span style={{marginLeft:5}}>({cart.length})</span></div>
          <div style={{cursor:'pointer'}}><FontAwesomeIcon icon={faArrowRight} style={{fontSize:"20px"}} onClick={()=>{document.querySelector(".cartContainer").style.marginRight="-400px"}}/></div>
        </div>

        <div style={{height:"75vh",overflowY:"scroll"}}>
          {
            
          cart.map((product,key)=>{
            return(
              <div key={key} className='product' style={{width:"87%",margin:"auto",height:100,display:"flex",justifyContent:"space-between",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"}}>
                <img src={`../images/products/${product.imageProduct}`} alt="" style={{width:100,height:100}} />
                <div style={{width:"65%"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <p>{product.name}</p>
                  <FontAwesomeIcon icon={faXmark} style={{fontSize:"15px",cursor:"pointer"}} onClick={()=>{Dispatch(DeleteToCart(product))}}/>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <input type="number" name="" id="" value={product.quantity}  onChange={(e)=>{const newquabtity=e.target.value;Dispatch(ModifiyQToCart(product,newquabtity))}} min={0} style={{width:100,border:"1px solid transparent"}}  />
                  <span style={{fontSize:15,opacity:0.5}}>{product.price}$</span>
                  <span style={{fontSize:15}}>{product.price*product.quantity}$</span>
                </div>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:30,paddingRight:30,paddingTop:15}}>
             <p>TOTAL : <span>{total}$</span></p>
             <FontAwesomeIcon icon={faTrash} style={{fontSize:"20px",color:"rgb(194, 7, 7)"}}/>
        </div>
        
        <div style={{width:"82%",margin:"auto"}}>
        <button style={{width:"100%",padding:10,color:"white",backgroundColor:"black",border:"1px black",borderRadius:5}}>Checkout</button>
        </div>
              
      </div>
    
    </div>
  )
}
