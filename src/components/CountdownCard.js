import React, { useState, useEffect } from 'react';
import './CountdownCard.css';

function CountdownCard({ imageUrl, title, alt, description, externalLink }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(`February 28, 2025 00:00:00`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval} className="countdown-timer">
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div className="countdown-card">
            <img src={imageUrl} alt={alt} className="countdown-image" />
            <div className="countdown-content">
                <h2 className="countdown-title">{title}</h2>
                <p className="countdown-description">{description}</p>
                {timerComponents.length ? (
                    <div className="countdown-timers">{timerComponents}</div>
                ) : (
                    <a href={externalLink} target="_blank" rel="noopener noreferrer">
                        <button className="countdown-button">Reveal</button>
                    </a>
                )}
            </div>
        </div>
    );
}

export default CountdownCard;