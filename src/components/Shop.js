import React from 'react'
import merch from "../images/merch.png"



const Shop = () => {
    return (

        <div class="our-shop" id='shop'>
            <img src = {merch} alt='merch' id='merch'/>
            <div className='shop-txt'>
            <h1>Shop the latest <h1 id='edit-font'>ferrari</h1> merch now!</h1>
            <a href="https://f1store.formula1.com/en/scuderia-ferrari/t-76758670+z-71034-984427031"><button>Go to Store</button></a>
            </div>


        </div>

    )
}

export default Shop
