import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";



class App extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      orders: [], 
      items: [
        {
          id: 1,
          title: 'Grey chair',
          img: 'grey chair.jpg',
          desc: `Slipper chairs are design perfection. Just as their name
                 suggests, they slip into the smallest spaces thanks to their 
                 armless design and unassuming size.`,
          category: 'chairs',
          price: '50.00'
        },
        {
          id: 2,
          title: 'Esteem Wooden Table',
          img: 'table.webp',
          desc: `Simple and sturdy, this beautiful table seats up to four 
                while offering the structural support you demand from 
                your key furniture pieces. This piece seats up to four in comfort.`,
          category: 'tables',
          price: '130.00'
        }, 
        {
          id: 3,
          title: 'Sofa Kasper',
          img: 'sofa3.webp',
          desc: `Beautifully soft deep blue fabric covers the entire piece and 
                combines with the seat, back and side cushioning to provide a sumptuously supportive seat 
                that is perfect for chilling out.`,
          category: 'sofa',
          price: '250.00'
        },
        {
          id: 4,
          title: 'Leather Comfy Chair',
          img: 'chair.jpg',
          desc: `If you’re looking to enjoy some quiet time at the end of 
                 a long day, a chair & ottoman set is perfect for you. 
                 Find comfortable and easygoing styles for your space.`,
          category: 'chairs',
          price: '50.00'
        },
        {
          id: 5,
          title: 'Sofa Norton',
          img: 'sofa4.webp',
          desc: `Reinvigorate your living room interior with the sleek 
                 and vibrant Sofa Norton range. Fully modular, this admirable
                 range is essentially a blank canvas waiting for you to get creative.`,
          category: 'sofa',
          price: '250.00'
        },
        {
          id: 6,
          title: 'Sofa Paul',
          img: 'sofa5.jpg',
          desc: `Exclusively for the Paul sofa system, the project marks an
                 important step towards the use of more environmentally 
                 friendly goods. The new fibre is synthetic, in 100 % recycled.`,
          category: 'sofa',
          price: '150.00'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(element => {
      if(element.id === item.id) {
        isInArray = true;
      }
    });
    if(!isInArray) {
    this.setState({orders: [...this.state.orders, item]})
   }
  }



  deleteOrder(item) {
    this.setState({orders: this.state.orders.filter(elem => elem.id !== item.id)});
  } 






  render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} deleteOrder = {this.deleteOrder}/> 
      <Items items = {this.state.items}
             onAdd = {this.addToOrder}/>
      <Footer />
    </div>
  );
}
}

export default App;
