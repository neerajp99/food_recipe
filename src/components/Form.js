import React, { Component } from "react";



const Form = props => (
  <form onSubmit = {props.getRecipe} style={{
    'marginBottom': "2rem",
  }}>
    <input className="recipe_form" type="text" name="recipeName" />
    <button className="recipe_form_button"> Submit </button>
  </form>
);

export default Form;
