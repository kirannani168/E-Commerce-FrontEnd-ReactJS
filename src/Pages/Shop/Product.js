import React from 'react'
import { useContext } from 'react';
import {ShopContext} from '../../Context/ShopContext'
function Product(props) {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={productImage} alt='product_images'/>
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>
                Rs.{price}
            </p>
            <button className='addToCartBttn' onClick={()=>addToCart(id)}>
            Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
            </button>
        </div>
    </div>
  )
}

export default Product