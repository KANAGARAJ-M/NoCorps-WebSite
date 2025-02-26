import React from 'react';
import CountdownCard from "../components/CountdownCard";
import Img13 from '../assets/13.png';
import Img14 from '../assets/14.png';

function Productes() {
    const currentHour = new Date().getHours();
    const imageUrl = currentHour >= 18 || currentHour < 6 ? Img14 : Img13; // Change image at 6 PM to 6 AM

    return (
        <div>
            <CountdownCard
                imageUrl={imageUrl}
                title={"Countdown to Reveal"}
                alt={"AIC"}
                description={"The button will be revealed when the countdown ends."}
                externalLink={"https://aiccoin.nocorps.org/register?ref=REF5XVNMDJZCW"}
            />
        </div>
    );
}

export default Productes;