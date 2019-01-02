import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Recipies extends Component {
  render() {
    const { recipeList } = this.props;
    return (
      <div className="recipe_list container">
        <div className="row">
          {recipeList.map(recipe => {
            return (
              <div
                className="recipe_main_section col-md-6"
                key={recipe.recipe_id}
              >
                <img
                  src={recipe.image_url}
                  alt={recipe.title}
                  className="recipe_main_image"
                />
                <div className="recipe_main_content">
                  <h2 className="recipe_title">
                    {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title.substr(0, 20)}...`}
                  </h2>

                  <h4 className="recipe_subtitle">
                    Publisher: {recipe.publisher}
                  </h4>
                  <Link
                    to={{
                      pathname: `/recipe/${recipe.recipe_id}`,
                      state: { recipe: recipe.title }
                    }}
                    className="recipe_link"
                  >
                    <button
                      className="recipe_list_button;"
                    >
                      View Recipe
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Recipies;
