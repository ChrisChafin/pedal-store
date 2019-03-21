import React, { Component } from "react";

const ProductItem = ({ categoryId, name, imageSrc, price }) => (
  <li id={categoryId}>
    <h3>{name}</h3>
    <img className="Product-img" src={imageSrc} alt={name} />
    <h3>Price: ${price}.00</h3>
  </li>
);

const ProductList = ({ state: { products, displayCategory } }) => (
  <div className="Products">
    <ul className="Product-list">
      {
            products
            .filter(
              ({ category }) =>
                displayCategory === category || displayCategory === "All"
            )
            .map(({ categoryId, name, imageSrc, price }) => (
              <ProductItem
                key={`ProductItems-${name}`}
                categoryId={categoryId}
                name={name}
                imageSrc={imageSrc}
                price={price}
              />
            )) 
          }
    </ul>
    
  </div>
);


const Toolbar = (dataCategories, setCategory) => (
  <div className="Toolbar">
    <ul className="Filter-list">
      {dataCategories.map(category => (
      <li
        key={category}
        className="App-link"
        onClick={() => setCategory(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  </div>
);

const AppBody = ({
  state,
  state: { dataCategories },
  setCategory
}) => (
  <div className="App-body">
    {Toolbar (dataCategories, setCategory)}
    <ProductList state={state} />
  </div>
  
);

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategory: "All",
      products: props.products,
      dataCategories: props.dataCategories
    };
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory(category) {
    this.setState({ displayCategory: category });
  }
  render(){
    return <AppBody setCategory={this.setCategory} state={this.state} />;
  }
}

export default Products;