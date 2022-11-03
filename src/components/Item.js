import React, { Component } from 'react'

class Item extends Component {
    
  render() {
    const {img, title, desc, price} = this.props.item;
    return (
      <div className='item'>
           <img src = {"./img/" + img} alt = "furniture"/>
           <h2>{title}</h2>
           <p>{desc}</p>
           <b>$ {price}</b>
           <div className='buy-btn'>
            <button className='add-to-cart'
                    onClick={() => this.props.onAdd(this.props.item)}>BUY</button>
           </div>
      </div>
           
         
    )
  }
}

export default Item;