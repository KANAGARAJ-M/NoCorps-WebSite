import React from "react";
import '../css/ImgCard.css'

const ImgCard = ({ title, description, imageUrl }) => {
    return (
        <div className="container">
            <div className="textContainer">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
            </div>
            <img src={imageUrl} alt="Illustration" className="image" />
        </div>
    );
};



export default ImgCard;


