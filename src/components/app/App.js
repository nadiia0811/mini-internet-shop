import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Items from "../items/Items";
import Categories from "../categories/Categories";
import ShowFullItem from "../showFullItem/ShowFullItem";
import AboutUs from '../about us/About-us';
import './app.css';

class App extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      isAboutUsClicked: false,

      orders: [], 
      showFullItem: false,
      fullItem: {},
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Grey office chair',
          img: 'grey office chair.jpeg',
          desc: `Slipper chairs are design perfection. Just as their name
                 suggests, they slip into the smallest spaces thanks to their 
                 armless design and unassuming size.`,
          category: 'chairs',
          price: '50.00'
        },
        {
          id: 2,
          title: 'Esteem Wooden Table',
          img: 'wood table.jpg',
          desc: `Simple and sturdy, this beautiful table seats up to four 
                while offering the structural support you demand from 
                your key furniture pieces. This piece seats up to four in comfort.`,
          category: 'tables',
          price: '130.00'
        }, 
        {
          id: 3,
          title: 'Sofa Kasper',
          img: 'sofa Kasper.jpg',
          desc: `Beautifully soft deep pastel fabric covers the entire piece and 
                combines with the seat, back and side cushioning to provide a sumptuously supportive seat 
                that is perfect for chilling out.`,
          category: 'sofas',
          price: '250.00'
        },
        {
          id: 4,
          title: 'Leather Comfy Chair',
          img: 'chair.webp',
          desc: `If you’re looking to enjoy some quiet time at the end of 
                 a long day, a chair & ottoman set is perfect for you. 
                 Find comfortable and easygoing styles for your space.`,
          category: 'chairs',
          price: '80.00'
        },
        {
          id: 5,
          title: 'Sofa Norton',
          img: 'sofa Norton.webp',
          desc: `Reinvigorate your living room interior with the sleek 
                 and vibrant Sofa Norton range. Fully modular, this admirable
                 range is essentially a blank canvas waiting for you to get creative.`,
          category: 'sofas',
          price: '250.00'
        },
        {
          id: 6,
          title: 'Sofa Paul',
          img: 'sofa Paul.jpeg',
          desc: `Exclusively for the Paul sofa system, the project marks an
                 important step towards the use of more environmentally 
                 friendly goods. The new fibre is synthetic, in 100 % recycled.`,
          category: 'sofas',
          price: '150.00'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.showCategory = this.showCategory.bind(this);
    this.state.currentItems = this.state.items;
    this.onShowItem = this.onShowItem.bind(this);

    this.showInformation = this.showInformation.bind(this); //
    this.closeWindow = this.closeWindow.bind(this);
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
  
  showCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items});
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(elem => elem.category === category)
    })
  }

  onShowItem(item) {
    this.setState({fullItem: item});
    this.setState({showFullItem: !this.state.showFullItem})
  }

  showInformation() {
    this.setState({isAboutUsClicked: true});
  }

  closeWindow() {
    this.setState({isAboutUsClicked: false});
  }  


  render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} 
              deleteOrder = {this.deleteOrder}
              showInformation = {this.showInformation}/> 
      <Categories showCategory = {this.showCategory}/>
      <Items items = {this.state.currentItems}
             onAdd = {this.addToOrder}
             onShowItem = {this.onShowItem}/>

      {this.state.showFullItem && <ShowFullItem item = {this.state.fullItem}
                                                onAdd = {this.addToOrder}
                                                onShowItem = {this.onShowItem}/>} 

      {this.state.isAboutUsClicked ? <AboutUs closeWindow = {this.closeWindow}/> : null}                                                 
      <Footer />
    </div>
  );
}
}

export default App;
