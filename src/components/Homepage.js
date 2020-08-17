import React from 'react';
import Search from './Search';
import RecipeList from './RecipeList';
import '../App.css';

const Homepage = (props) => {
    return (
        <div className="home-page">
            <header>
                <Search />
                <h2>Category</h2>
                <h1>Pizzas and Noodles</h1>
            </header>
            <ul className="main-content">
                {props.recipes.length === 0 && <h2>Loading...</h2>}
                <RecipeList {...props} setRecipe={props.setRecipe} recipes = {props.recipes}/>
            </ul>
        </div>
    );
}

export default Homepage;