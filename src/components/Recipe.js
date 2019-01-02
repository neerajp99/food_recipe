import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const API_KEY = "33e6f429e10d3f4541f2bf69852fed15";

class Recipe extends Component {
  state = {
    currentRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const recipeRequest = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );
    const result = await recipeRequest.json();
    this.setState({
      currentRecipe: result.recipes[0]
    });
  };
  render() {
    const recipe = this.state.currentRecipe;
    console.log(this.state);

    return (
      <div className="recipe_content">
        {this.state.currentRecipe.length !== 0 && (
          <div className="recipe_content_inner">
            <img
              src={recipe.image_url}
              alt={recipe.recipe_id}
              className="recipe_content_image"
            />
            <div className="recipe_content_details">
              <h1 className="recipe_content_heading">{recipe.title}</h1>
              <ul className="recipe_content_list">
                <li className="recipe_content_list_item">
                  <span>Publisher: </span>
                  {recipe.publisher}
                </li>
                <li className="recipe_content_list_item">
                  <span>Publisher URL: </span>
                  <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
                </li>
                <li className="recipe_content_list_item">
                  <span>Source URL: </span>
                  <a href={recipe.source_url}>{recipe.source_url}</a>
                </li>
              </ul>

              <Link to="/" className="recipe_back_link">
                <button className="go_back_button">Go Back</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
