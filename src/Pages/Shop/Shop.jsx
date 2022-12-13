import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'
import './Shop.css'
function Shop() {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1>Kulkarni Shop</h1>
            </div>
            <div className='products'>
                {
                    PRODUCTS.map((prod) => (
                        <Product key={prod.id} data={prod}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Shop