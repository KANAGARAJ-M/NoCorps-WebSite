import ImgCard from "../components/ImgCard";
import Img from '../assets/NcLogo.png';
import NormalTextCard from "../components/NormalTextCard";
import React from 'react';

function Servicses() {
    return (
        <div>
            <ImgCard
                imageUrl={Img}
                alt={"NoCorps Logo"}
                title={"What We Offer"}
                description={"At NoCorps, we provide expert Flutter development, full-stack development, and web development services, creating high-performance applications for Android, iOS, Web, and Windows. Whether you're a startup or an enterprise, we build scalable, user-friendly, and secure digital solutions tailored to your needs."}
            />
            <NormalTextCard
                title={"📱 Flutter App Development"}
                description={
                    [
                        "Build cross-platform mobile applications with a single codebase. We create high-quality, feature-rich apps for Android & iOS, ensuring smooth performance and a seamless user experience.", 
                        "✅ Faster development & reduced costs", 
                        "✅ Native-like performance", 
                        "✅ Scalable & maintainable apps"
                        // "Flutter app consultation and strategy"
                    ]
                }
            />
            <NormalTextCard
                title={"🌐 Web Development"}
                description={
                    [
                        "We design and develop modern, responsive, and SEO-friendly websites and web applications. Our web solutions are built for speed, security, and scalability.", 
                        "✅ Custom websites & web apps", 
                        "✅ Interactive & user-friendly UI/UX", 
                        "✅ High-performance & secure solutions"
                        // "Flutter app consultation and strategy"
                    ]
                }
            />
            <NormalTextCard
                title={"💻 Full-Stack Development"}
                description={
                    [
                        "We offer complete frontend & backend solutions for scalable applications. Our expertise covers both server-side and client-side technologies, ensuring a smooth and secure user experience.", 
                        "✅ Backend: Node.js, Express, Firebase, Supabase, MongoDB, PostgreSQL", 
                        "✅ Frontend: React.js, Next.js, Vue.js, Angular", 
                        "✅ API Development & Integrations"
                        // "Flutter app consultation and strategy"
                    ]
                }
            />
            <NormalTextCard
                title={"🖥 Windows Application Development"}
                description={
                    [
                        "Need a desktop solution? We develop custom Windows applications that enhance productivity and streamline business operations.", 
                        "✅ Enterprise software solutions", 
                        "✅ Business management tools", 
                        "✅ Secure & scalable desktop apps"
                        // "Flutter app consultation and strategy"
                    ]
                }
            />
            <NormalTextCard
                title={"🚀 Why Choose Us?"}
                description={
                    [
                        "✔ Experienced Developers – Skilled in the latest technologies", 
                        "✔ Custom Solutions – Tailored applications for your business needs", 
                        "✔ High-Quality Code – Scalable, secure, and optimized for performance", 
                        "✔ Timely Delivery – On-time project completion with regular updates",
                        "✔ Post-Launch Support – Maintenance, updates, and ongoing assistance"
                    ]
                }
            />

        </div>
    );
}

export default Servicses;