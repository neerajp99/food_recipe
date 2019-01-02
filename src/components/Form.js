import React, { Component } from "react";

class Form extends Component {
  render() {
    const { getRecipe } = this.props;
    return (
      <form onSubmit={getRecipe} className="recipe_form">
        <input
          className="recipe_form_input"
          type="text"
          name="recipeName"
          placeholder="Recipe Name"
        />
        <br />
        <button className="recipe_form_button"> Submit </button>
      </form>
    );
  }
}

export default Form;
