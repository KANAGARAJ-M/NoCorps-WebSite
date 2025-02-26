import ImgCard from "../components/ImgCard";
import Img from '../assets/NcLogo.png';
import TextCard from "../components/TextCard";
import NormalTextCard from "../components/NormalTextCard";
import React from 'react';

function Home() {
    return (
        <div>
            <h1>Welcome to NoCorps</h1>
            <ImgCard
                imageUrl={Img}
                title={"Innovative Development Solutions for Your Business"}
                alt={"This is img"}
                description={"At NoCorps, we specialize in Flutter development, full-stack development, and web development, delivering high-quality applications for Android, iOS, Web, and Windows. Whether you're a startup or an established business, we build scalable, user-friendly, and performance-driven digital solutions tailored to your needs."}
            />
            <TextCard
                title={"Why Choose Us?"}
                description={[
                    "✅ Expert Developers – Skilled in the latest technologies to build seamless applications.",
                    "✅ Cross-Platform Solutions – One codebase, multiple platforms, saving you time & cost.",
                    "✅ Custom Development – We tailor every project to match your business goals.",
                    "✅ End-to-End Service – From UI/UX design to deployment and maintenance.",
                    "✅ Client Satisfaction – Proven success with a track record of happy clients."
                ]}
            />

            <NormalTextCard
                title="What We Offer"
                description={[
                    "🚀 Mobile App Development – High-performance Android & iOS applications.",
                    "🌍 Web Development – Engaging and responsive websites & web apps.",
                    "💻 Full-Stack Solutions – Robust front-end & back-end development.",
                    "🖥 Windows Applications – Custom desktop software for business efficiency.",
                    "",
                    "Let’s turn your vision into reality with cutting-edge technology and expert execution.",
                    "",
                    "📩 Get in Touch Today! Let’s build something amazing together. 🚀"
                ]}
            />

        </div>
    );
}

export default Home;