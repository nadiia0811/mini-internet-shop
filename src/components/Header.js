import React, { useState } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import Order from './Order';

export default function Header(props) { 

  let [cartOpen, setCartOpen] = useState(false);
  
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
                {/* {props.orders.map(item => (
                 
                  <div className='item'>
                    <img src = {"./img/" + item.img} alt = "furniture"/>
                    <h2>{item.title}</h2>
                    <b>$ {item.price}</b>
                  </div>
                ))} */}

                {props.orders.map(elem => (
                  <Order item = {elem} key = {elem.id}/>
                ))}

              </div>
            )}                
            <div className='presentation'></div>
        </div>
    </header>
  )
}
