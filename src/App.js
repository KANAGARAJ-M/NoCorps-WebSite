import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Home from "./pages/Home";
import Abouts from "./pages/About";
import Servicses from "./pages/Servicses";
import Productes from "./pages/Products";
import Policy from "./pages/Policy";
import Navbar from "./components/NavBar";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WebTandC from "./policies-and-tc/WebTandC";
import WebCookiePolicy from "./policies-and-tc/webCookiePolicy";
import AicCoinPP from "./policies-and-tc/aiccoin/pp";
import AicCoinTandC from "./policies-and-tc/aiccoin/tanc";
import ChatUpPP from "./policies-and-tc/chatup/pp";
import ChatUpTandC from "./policies-and-tc/chatup/tanc";
import ShareMediaPP from "./policies-and-tc/sharemedia/pp";
import ShareMediaTandC from "./policies-and-tc/sharemedia/tanc";
import MemeMediaPP from "./policies-and-tc/mememedia/pp";
import MemeMediaTandC from "./policies-and-tc/mememedia/tanc";
import GoogleForm from "./pages/ContactUs";
import Footer from "./components/Footer";
import MobileServices from "./services/mobile";
// import WebServices from "./services/web";
// import FullStackServices from "./services/fullstack";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import FullStackServices from "./services/fullstack";
import WebServices from "./services/web";
import AicCoinProduct from "./pages/products/AicCoinProduct";
import ContactForm from "./contact/contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Helmet>
          {/* Default Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          
          {/* Default SEO */}
          <title>NoCorps - Professional Development Solutions</title>
          <meta name="description" content="NoCorps provides professional Flutter, full-stack, and web development services. Build your next digital solution with us." />
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <meta name="keywords" content="NoCorps, Flutter development, full-stack development, web development, mobile apps, software solutions" />
          <meta name="author" content="NoCorps Development Team" />
          
          {/* Security Headers */}
          <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://nocorps.org; script-src 'self'" />
          <meta http-equiv="X-Content-Type-Options" content="nosniff" />
          <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
          
          {/* Default Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="NoCorps" />
          <meta property="og:title" content="NoCorps - Professional Development Solutions" />
          <meta property="og:description" content="Build your next digital solution with NoCorps. Expert Flutter, full-stack, and web development services." />
          <meta property="og:image" content="https://nocorps.org/NcLogo.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="en_US" />
          
          {/* Default Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@nocorps_dev" />
          <meta name="twitter:title" content="NoCorps - Professional Development Solutions" />
          <meta name="twitter:description" content="Build your next digital solution with NoCorps. Expert Flutter, full-stack, and web development services." />
          <meta name="twitter:image" content="https://nocorps.org/NcLogo.png" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://nocorps.org" />
        </Helmet>

        <Navbar />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/services" element={<Servicses />} />
          <Route path="/products" element={<Productes />} />
          <Route path="/policies" element={<Policy />} />
          
          {/* Service Routes */}
          <Route path="/services/mobile-development" element={<MobileServices />} />
          <Route path="/services/web-development" element={<WebServices />} />
          <Route path="/services/full-stack-development" element={<FullStackServices />} />

          {/* Product Routes */}
          <Route path="/products/aic-coin" element={<AicCoinProduct />} />
          {/* <Route path="/products/share-media" element={<ShareMediaProduct />} />
          <Route path="/products/vshare" element={<VShareProduct />} />
          <Route path="/products/chat-up" element={<ChatUpProduct />} /> */}

          <Route path="/contact-form/" element={<ContactForm />} />
          {/* Website Policies */}
          <Route path="/web/NoCorps/*">
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="t&c" element={<WebTandC />} />
            <Route path="cookie-policy" element={<WebCookiePolicy />} />
          </Route>

          {/* App Policies */}
          <Route path="/android/app/*">
            <Route path="AICCoin/*">
              <Route path="Privacy-Policy" element={<AicCoinPP />} />
              <Route path="Terms-and-Conditions" element={<AicCoinTandC />} />
            </Route>
            <Route path="Chat-Up/*">
              <Route path="Privacy-Policy" element={<ChatUpPP />} />
              <Route path="Terms-and-Condition" element={<ChatUpTandC />} />
            </Route>
            <Route path="Share-Media/*">
              <Route path="Privacy-Policy" element={<ShareMediaPP />} />
              <Route path="Terms-and-Condition" element={<ShareMediaTandC />} />
            </Route>
            <Route path="Meme-Media/*">
              <Route path="Privacy-Policy" element={<MemeMediaPP />} />
              <Route path="Terms-and-Condition" element={<MemeMediaTandC />} />
            </Route>
          </Route>

          {/* Contact Route */}
          <Route path="/Contact/form" element={<GoogleForm />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;