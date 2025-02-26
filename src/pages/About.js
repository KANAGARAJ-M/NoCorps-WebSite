import ImgCard from "../components/ImgCard";
import Img from '../assets/NcLogo.png';
import TextCard from "../components/TextCard";
import NormalTextCard from "../components/NormalTextCard";
import React from 'react';

function Abouts() {
    return(
        <div>
            <ImgCard
                imageUrl={Img}
                title={"Who We Are"}
                alt={"This is img"}
                description={"At NoCorps, we are passionate about crafting high-quality digital solutions that empower businesses to grow. With expertise in Flutter development, full-stack development, and web development, we create seamless, scalable, and high-performance applications for Android, iOS, Web, and Windows."}
            />
            <ImgCard 
            imageUrl={Img}
            title={"Our Mission"}
            alt={"This is img"}
            description={"Our goal is to turn ideas into reality by delivering top-notch software solutions tailored to meet your business needs. We believe in innovation, efficiency, and user-centric design, ensuring that every project we work on provides real value to our clients."}
            />
            <TextCard
                title={"Our Expertise"}
                description={[
                    "🔹 Flutter Development – Build cross-platform apps with a single codebase.",
                    "🔹 Full-Stack Development – Backend & frontend solutions for seamless user experiences.",
                    "🔹 Web Development – Responsive websites & web applications for businesses.",
                    "🔹 Mobile App Development – Custom Android & iOS applications optimized for performance.",
                    "🔹 Windows App Development – Scalable and secure desktop applications."
                ]}
            />

            <NormalTextCard
                title="Why Work With Us?"
                description={[
                    "✅ Experienced Team – Skilled developers with a deep understanding of modern technologies.",
                    "✅ Client-Focused Approach – We tailor our services to meet your specific needs.",
                    "✅ High-Quality Standards – Clean code, scalable architecture, and intuitive UI/UX.",
                    "✅ Timely Delivery – We value your time and ensure projects are completed on schedule.",
                    "✅ Ongoing Support – From development to post-launch maintenance, we’ve got you covered.",
                    // "📩 Get in Touch Today! Let’s build something amazing together. 🚀"
                ]}
            />
            <ImgCard 
            title={"Our Vision"}
            description={"We aim to be a leading technology partner, helping businesses innovate and scale through high-quality digital solutions. With a commitment to excellence, we focus on delivering results-driven applications that make a difference."}
            alt={'This is img'}
            imageUrl={Img}
            />
        </div>
    );
}

export default Abouts;