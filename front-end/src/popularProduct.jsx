import React from 'react'
import "./popularProduct.css"

export default function PopularProduct() {
  return (
    <div className='PopularProductContainer'>

        <div className='PopularProductContainerFirst'>
           <div className='PopularProductContainerFirstOne'>
            <div className='PopularProductContainerFirst1'>
             <h1>MOST POPULAR</h1>
             <p><button>SHOP NOW</button></p>
            </div>
           </div>
        </div>

        <div className='PopularProductContainerSecond'>

           <div>
            <img src="../images/converse-baskets-chuck-taylor-all-star-lugged-hi-n.webp" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h4>Lorem ipsum</h4>
           </div>

           <div>
            <img src="../images/a3f351e5280d32687821bdfb29498ce9d42023fc_DH6927_161_Nike_Air_Jordan_4_Retro_Red_Cement_White_Fire_Red_Black_Natural_Grey_OS_1_768x768.webp" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h4>Lorem ipsum</h4>
           </div>

           <div>
            <img src="../images/Adidas-Forum-Bold-Sneakers-Dames-2308021003.webp" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h4>Lorem ipsum</h4>
           </div>

           <div>
            <img src="../images/95_500_A.jpg" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <h4>Lorem ipsum</h4>
           </div>

        </div>


    </div>
  )
}
