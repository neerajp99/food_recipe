import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Recipe extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="recipe_content">
        <Link to="/" className="recipe_back_link">
          Click
        </Link>
      </div>
    );
  }
}

export default Recipe;
