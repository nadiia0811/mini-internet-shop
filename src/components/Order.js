import React, { Component } from 'react';

class Order extends Component {
  render() {
    const {img, title, price} = this.props.item;
    return (
      
        <div className='item'>
            <img src = {"./img/" + img} alt = "furniture"/>
            <h2>{title}</h2>
            <b>$ {price}</b>
         </div>
      
    )
  }
}

export default Order;