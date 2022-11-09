import React, { useState } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import Order from '../order/Order';
import './header.css';

export default function Header(props) { 

  let [cartOpen, setCartOpen] = useState(false);

  const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(elem => sum += Number.parseFloat(elem.price));

   return (
   <div>
      {props.orders.map(item => (
        <Order item = {item} key = {item.id} deleteOrder = {props.deleteOrder}/>
      ))}
      <p className='sum'> Sum: $ {sum.toFixed(2)}</p>   
    </div>)
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
            <ul className='nav' >
              <li onClick={ props.showInformation}>About us</li>
              <li>Contacts</li>
              <li>Cabinet</li>
            </ul>
            <FaShoppingCart onClick = {() => setCartOpen(cartOpen = !cartOpen)} 
                            className={`shop-cart-button ${cartOpen && 'active' }`}/>
            {cartOpen && (
              <div className='shop-cart'>
                 { props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}                
            <div className='presentation'></div>
        </div>
    </header>
  )
}
