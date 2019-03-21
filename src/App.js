import React, { Component } from 'react';
import Products from "./products/Products"
import data from "./data/data.json";
import './App.css';

const PRODUCTS = data;
//separate array for category only
const uniqueItems = (x, i, arr) => arr.indexOf(x) === i;
const DATA_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(uniqueItems);

DATA_CATEGORIES.push("All");
DATA_CATEGORIES.sort();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>EarthQuaker Devices</h1>
        </div>
        <Products products={PRODUCTS} dataCategories={DATA_CATEGORIES} />
      </div>
    );
  }
}

export default App;
