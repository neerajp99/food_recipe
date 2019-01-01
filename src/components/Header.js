import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="recipe_navbar" style={
        {
          marginLeft: "8em"
       }
      }>
        <header className="recipe_header">
          <h1 className="recipe_heading">Recipe</h1>
        </header>
      </div>
    );
  }
}

export default Header;
