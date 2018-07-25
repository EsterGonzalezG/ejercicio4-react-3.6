import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lista from './components/Lista';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const items = [
  {
    name:"Cereales con chocolate",
    // description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5
  },
  {
    name:"Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15
  },
  {
    name:{6},
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",

  },
  {
    name:"Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5
  }
];
    return (
      <div className="App">
        <ul className="list__app">

            {items.map(function(item){
    return (
      <li className="list__app--item">
        <Lista names={item.name} descripcion={item.description} cantidad={item.quantity} categoria={item.category} precio={item.price}  />
      </li>
    );
  })}

        </ul>
      </div>
    );
  }
}

export default App;
