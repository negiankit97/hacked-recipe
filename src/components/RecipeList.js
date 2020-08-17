import React from 'react';
import Recipe from './Recipe';
const RecipeList = (props) => {
    return (
        <React.Fragment>
            {props.recipes.map((recipe) => <Recipe key={recipe.id} {...props} setRecipe={props.setRecipe} recipe={recipe} />)}
        </React.Fragment>
    );
}

export default RecipeList;