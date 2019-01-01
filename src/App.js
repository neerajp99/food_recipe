import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipies from "./components/Recipies";

const API_KEY = "aee450e795f799f4dd397943442631cf";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=2`
    );
    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="recipe_header">
          <h1 className="recipe_heading">Recipe</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipies recipeList={this.state.recipes} />
      </div>
    );
  }
}

export default App;
