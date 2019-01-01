import React, { Component } from "react";
import PropTypes from "prop-types";

class Recipies extends Component {
  render() {
    const { recipeList } = this.props;
    return (
      <div className="recipe_list container">
        {recipeList.map(recipe => {
          return (
            <div className="recipe_main_section" key={recipe.recipe_id}>
              <img src={recipe.image_url} alt={recipe.title} />
              <h2 className="recipe_title">{recipe.title}</h2>
              <h4 className="recipe_subtitle">Publisher: {recipe.publisher}</h4>
              <button className="recipe_list_button">View Recipe</button>
            </div>

          );
        })}
      </div>
    );
  }
}

export default Recipies;
