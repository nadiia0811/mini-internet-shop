import React, { Component } from 'react'
import Item from './Item';

 class Items extends Component {
  render() {
    return (
        
       <main>
        {this.props.items.map(item => (
            <Item key = {item.id} 
                  item = {item}
                  onAdd = {this.props.onAdd}
                  onShowItem = {this.props.onShowItem}/>
        ))}
       </main> 
    )
  }
}

export default Items;
