import React from 'react'
import "./NewProduct.css"

export default function NewProduct() {
  return (
    <div className='NewProductContainer'>

        <div className='NewProductContainerFirst'>
           <div className='NewProductContainerFirstOne'>
            <div className='NewProductContainerFirst1'>
             <h1>NEW ARRIVALS</h1>
             <p><button>SHOP NOW</button></p>
            </div>
           </div>
        </div>

        <div className='NewProductContainerSecond'>

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
