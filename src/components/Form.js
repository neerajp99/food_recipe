import React, { Component } from "react";

class Form extends Component {
  render() {
    const { getRecipe } = this.props;
    return (
      <form
        onSubmit={getRecipe}
        style={{
          marginBottom: "2rem"
        }}
      >
        <input className="recipe_form" type="text" name="recipeName" />
        <button className="recipe_form_button"> Submit </button>
      </form>
    );
  }
}

export default Form;
