import React, { Component } from 'react';
import './categories.css';

class Categories extends Component {
    constructor(props){
        super(props);

        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'chairs',
                    name: 'Chairs'
                },
                {
                    key: 'tables',
                    name: 'Tables'
                },
                {
                    key: 'sofas',
                    name: 'Sofas'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(elem => (
            <div key = {elem.key}
                 onClick = {() => this.props.showCategory(elem.key)}>{elem.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories;