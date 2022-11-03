import React, { useState } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import Order from './Order';

export default function Header(props) { 

  let [cartOpen, setCartOpen] = useState(false);

  const showOrders = (props) => {
   return (props.orders.map(item => (
      <Order item = {item} key = {item.id}/>
    )))
  }

  const showNothing = () => {
    return (
      <div className='empty'>
        <h2>The cart is empty!</h2>
      </div>
    )
  }
  
  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
              <li>About us</li>
              <li>Contacts</li>
              <li>Cabinet</li>
            </ul>
            <FaShoppingCart onClick = {() => setCartOpen(cartOpen = !cartOpen)} 
                            className={`shop-cart-button ${cartOpen && 'active' }`}/>
            {cartOpen && (
              <div className='shop-cart'>

                          {/*   {props.orders.map(elem => (
                              <Order item = {elem} key = {elem.id}/>
                            ))} */}

                 { props.orders.length > 0 ? showOrders(props) : showNothing()}

              </div>
            )}                
            <div className='presentation'></div>
        </div>
    </header>
  )
}
