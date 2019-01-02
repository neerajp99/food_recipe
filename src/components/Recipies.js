import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Recipies extends Component {
  render() {
    const { recipeList } = this.props;
    return (
      <div className="recipe_list container">
        {recipeList.map(recipe => {
          return (
            <div className="recipe_main_section" key={recipe.recipe_id}>
              <img src={recipe.image_url} alt={recipe.title} />
              <h2 className="recipe_title">
                {recipe.title.length < 20
                  ? `${recipe.title}`
                  : `${recipe.title.substr(0, 20)}...`}
              </h2>
              <h4 className="recipe_subtitle">Publisher: {recipe.publisher}</h4>

              <button className="recipe_list_button">
                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipe: recipe.title }
                  }}
                  className="recipe_link"
                >
                  View Recipe
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Recipies;
