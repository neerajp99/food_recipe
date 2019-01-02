import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const API_KEY = "87c512bed7270a36543fa9a4b06c8bf0";

class Recipe extends Component {
  state = {
    currentRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const recipeRequest = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );
    const result = await recipeRequest.json();
    this.setState({
      currentRecipe: result.recipes[0]
    });
  };
  render() {
    const recipe = this.state.currentRecipe;

    return (
      <div className="recipe_content">
        {this.state.currentRecipe.length !== 0 && (
          <div className="recipe_content_inner">
            <img src={recipe.image_url} alt={recipe.recipe_id} />
            <Link to="/" className="recipe_back_link">
              Click
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
