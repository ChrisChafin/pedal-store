import React, { Component } from "react";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCategories: props.dataCategories,
      setCategory: props.setCategory
    }

  }
  
  render() {
    return (
      <div className="Toolbar">
        <ul className="Filter-list">
          {this.state.dataCategories.map(category => (
            <li
              key={category}
              className="App-link"
              onClick={() => this.setCategory(category)}
            >
              {category}
            </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Toolbar;