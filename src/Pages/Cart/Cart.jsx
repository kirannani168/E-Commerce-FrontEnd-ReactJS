import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext'
import { PRODUCTS } from '../../products'
import CartItem from './CartItem.js'
import './Cart.css'
import { Link } from 'react-router-dom';
import { Bag, Bug } from 'phosphor-react';
function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  return (
    <div className='cart'>
      {totalAmount > 0 ? (
        <div>
          <div>
            <h1>Your cart items <Bag size={32} /></h1>
          </div>
          <div className='cartItems'>
            {
              PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <CartItem key={product.id} data={product} />;
                }
              })
            }
          </div>

          <div className='checkout'>
            <p>Subtotal: Rs.{totalAmount}</p>
            <Link to={'/'}><button>Continue Shopping</button></Link>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <div>
          <div className='checkout'>
            <h2>Your cart is EMPTY <Bag size={32} /></h2>
            <Bug className='empIcon' size={192} /><br/>
            <Link to={'/'}><button>Continue Shopping</button></Link>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart