import React, { useState, useEffect } from 'react';
import './CountdownCard.css';

function CountdownCard({ imageUrl, title, alt, description, externalLink, targetDate }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        
        if (difference <= 0) {
            return {};
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [targetDate]); // Add targetDate as dependency

    const formatNumber = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    const renderCountdown = () => {
        if (Object.keys(timeLeft).length === 0) {
            return (
                <a href={externalLink} target="_blank" rel="noopener noreferrer">
                    <button className="countdown-button">Reveal</button>
                </a>
            );
        }

        return (
            <div className="countdown-timers">
                <div className="countdown-item">
                    <span className="countdown-value">{formatNumber(timeLeft.days)}</span>
                    <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-value">{formatNumber(timeLeft.hours)}</span>
                    <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-value">{formatNumber(timeLeft.minutes)}</span>
                    <span className="countdown-label">Minutes</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-value">{formatNumber(timeLeft.seconds)}</span>
                    <span className="countdown-label">Seconds</span>
                </div>
            </div>
        );
    };

    return (
        <div className="countdown-card">
            <img src={imageUrl} alt={alt} className="countdown-image" />
            <div className="countdown-content">
                <h2 className="countdown-title">{title}</h2>
                <p className="countdown-description">{description}</p>
                {renderCountdown()}
            </div>
        </div>
    );
}

export default CountdownCard;