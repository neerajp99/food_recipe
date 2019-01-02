import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Recipies from "./components/Recipies";
import Recipe from "./components/Recipe";
import { Route } from "react-router-dom";

const API_KEY = "87c512bed7270a36543fa9a4b06c8bf0";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`
    );
    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };
  componentDidMount = () => {
    const jsonData = localStorage.getItem("recipes");
    const jsonParse = JSON.parse(jsonData);
    if(this.state.recipes.length != null){
      this.setState({
        recipes: jsonParse
      });
    }

  };

  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Header />} />
        <Route
          exact
          path="/"
          render={() => <Form getRecipe={this.getRecipe} />}
        />
        <Route
          exact
          path="/"
          render={() => <Recipies recipeList={this.state.recipes} />}
        />
        <Route
          path="/recipe/:id"
          render={props => <Recipe {...props} isAuthed={true} />}
        />
      </div>
    );
  }
}

export default App;
