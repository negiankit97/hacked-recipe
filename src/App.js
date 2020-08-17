import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import RecipeDetail from './components/RecipeDetail';
import axios from 'axios';

const API = 'http://starlord.hackerearth.com/recipe';
class App extends Component {
  state = {
    recipes: JSON.parse(window.localStorage.getItem('recipes')) || [],
    recipeDetail: JSON.parse(window.localStorage.getItem('recipe')) || {},
    errorState: {
      isError: false,
      message: null
    },
    comments: []
  };

  fetchRecipes() {
    axios.get(API)
      .then(res => res.data)
      .catch(err => {
        this.setState({
          errorState: {
            isError: true,
            message: err
          }
        });
      })
      .then(recipes => {
        window.localStorage.setItem('recipes', JSON.stringify(recipes));
        this.setState({
          recipes: recipes
        });
      })
  }
  componentDidMount() {
    this.fetchRecipes();
  }

  setRecipe = (recipe) => {
    console.log(recipe);
    window.localStorage.setItem('recipe', JSON.stringify(recipe));
    this.setState({
      recipeDetail: recipe
    })
  }

  addComment = (comment) => {
    this.setState((state) => ({
      comments: [...state.comments, comment]
    })
    )
  }
  render() {
    const {recipes, recipeDetail, errorState, comments} = this.state;

    if(errorState.isError === true){
    return <h2>Oops, something went wrong. Reason: {errorState.message}!</h2> 
    }
    return (
      <div className="App" >
        <Route exact path="/" render={(props) => <Homepage {...props} setRecipe={this.setRecipe} recipes={recipes} />} />
        <Route path="/details/:id" render={(props) => <RecipeDetail {...props} addComment={this.addComment} comments={comments} recipeDetail={recipeDetail} />}></Route>
      </div>
    );
  }
}

export default App;
