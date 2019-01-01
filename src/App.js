import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Recipies from "./components/Recipies";
import Recipe from "./components/Recipe";
import { Route } from "react-router-dom";

const API_KEY = "aee450e795f799f4dd397943442631cf";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=2`
    );
    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
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
