import React from "react";
import '../css/TextCard.css'

const TextCard = ({ title, description }) => {
    return (
        <div className="container">
            <div className="textContainer">
                <h3 className="title">{title}</h3>
                <ul className="description">
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TextCard;