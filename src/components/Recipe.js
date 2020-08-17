import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
    const [isLiked, setLiked] = useState(false);
    const { name, image, category, label, price, description } = props.recipe;
    return (
        <li className="list-item">
        <Link to={{ pathname: "/details/" + props.recipe.id, state: { from: props.location } }} className="link" onClick ={() => props.setRecipe(props.recipe)}>
            <div className="recipe-card" style={{background:  `linear-gradient(to top, rgba(0,0,0,1),rgba(0,0,0,0.5)),url(${image})`, backgroundPosition:'top', backgroundSize:'cover'}}>
                <h4 className="category">In {category}</h4>
                <h2>{name}</h2>
                {isLiked ? <img src={process.env.PUBLIC_URL + "/assets/Assets/Icons/Icon feather-heart-color.png"} className="like-btn" onClick={(e) => {e.preventDefault();setLiked(!isLiked)}}/>:<img src={process.env.PUBLIC_URL + "/assets/Assets/Icons/Icon feather-heart.png"} className="like-btn" onClick={(e) => {e.preventDefault();setLiked(!isLiked)}}/>}
                <span>
                    <img src={process.env.PUBLIC_URL + '/assets/Assets/Icons/Icon feather-clock.png'} alt="feather-clock"></img>
                    <h3 style={{marginLeft:"10px", display: "inline-block"}}>25mins</h3>
                </span>
                <p>{description}</p>
                <h3>Price: {price}</h3>
            </div>
        </Link>
        </li>
    );
}

export default Recipe;