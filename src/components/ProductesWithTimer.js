import React, { useState, useEffect } from 'react';
import ImgCard from "../components/ImgCard";
import Img from '../assets/10.png';

function ProductesWithTimer() {
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
    }, [timeLeft]);

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div>
            <ImgCard
                imageUrl={Img}
                title={"It's coming....."}
                alt={"AIC"}
                description={"Get ready for collecting your bonus and rewards!. Just 5 Days to go."}
            >
                <div>
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                </div>
            </ImgCard>
        </div>
    );
}

export default ProductesWithTimer;