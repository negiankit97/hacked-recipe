import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function ratingSystem() {
    const images = [];
    for (let i = 0; i < 5; i++) {
        images.push(<img key={i} src={process.env.PUBLIC_URL + "/assets/Assets/Icons/Icon awesome-star.png"} style={{ marginLeft: "1em" }} />);
    }
    return images;
}
const RecipeDetail = (props) => {
    const [comment, setComment] = useState('');

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.addComment(comment);

        setComment('');
    }
    if (!Object.keys(props.recipeDetail).length) {
        return <h2>Oops, something went wrong! We are not able to load your recipe</h2>;
    }
    return (
        <div className="recipe-detail">
            <div className="link">
                <Link to={{ pathname: "/", state: { from: props.location } }}><FaArrowLeft style={{ fontSize: "48px" }} /></Link>
                <h2 style={{ fontWeight: 'bold', display: "inline-block", margin: "0px 2em" }}>Go Back</h2>
            </div>
            <div className="recipe-content">
                <img src={props.recipeDetail.image} alt={props.recipeDetail.name} />
                <div className='recipe-header'>
                    <h1 className="recipe-title" >{props.recipeDetail.name}</h1>
                    <div className="rating">
                        {
                            ratingSystem()
                        }
                    </div>
                    <div className="bubble-container">
                        <div className="bubbles">
                            <h1 className="some-item">8 minutes</h1>
                            <p className="some-item">Guarantee</p>
                        </div>
                        <div className="bubbles">
                            <h1 className="some-item">8 minutes</h1>
                            <p className="some-item">Guarantee</p>
                        </div>
                        <div className="bubbles">
                            <h1 className="some-item">8 minutes</h1>
                            <p className="some-item">Guarantee</p>
                        </div>
                    </div>
                </div>
                <p className="recipe-description">{props.recipeDetail.description}</p>
                <div className="comment-section">
                    <form onSubmit={handleSubmit}>
                        <label className="form-item add-comment-title" htmlFor="comment">Add comment</label>
                        <textarea id="comment" className="form-item" name="comment" rows={10} cols={50} value={comment} placeholder="Type something..." onChange={handleChange}></textarea>
                        <button type="submit" className="form-item submit-btn">Comment</button>
                    </form>
                </div>
            </div>
            <div className="show-comment">
                <ol>
                    {props.comments.length !== 0 && props.comments.map((comment) => <li>{comment}</li>)}
                </ol>
            </div>
        </div>
    );
}

export default RecipeDetail;