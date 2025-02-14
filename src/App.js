import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Abouts from "./pages/About";
import Servicses from "./pages/Servicses";
import Productes from "./pages/Products";
import Policy from "./pages/Policy";
import Navbar from "./components/NavBar";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WebTandC from "./policies-and-tc/WebTandC";
// import webCookiePolicy from "./policies-and-tc/webCookiePolicy";
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


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/services" element={<Servicses />} />
        <Route path="/products" element={<Productes />} />
        <Route path="/policies" element={<Policy />} />
        <Route path="/web/NoCorps/privacy-policy" element={<PrivacyPolicy />} /> {/* Fixed Route */}
        <Route path="/web/NoCorps/t&c" element={<WebTandC/>} />
        <Route path="/web/NoCorps/cookie-policy" element={<WebCookiePolicy />} />
        <Route path="/android/app/AICCoin/Privacy-Policy" element={<AicCoinPP/>} />
        <Route path="/android/app/AICCoin/Terms-and-Conditions" element={<AicCoinTandC/>} />
        <Route path="/android/app/Chat-Up/Privacy-Policy" element={<ChatUpPP/>} />
        <Route path="/android/app/Chat-Up/Terms-and-Condition" element={<ChatUpTandC />}/>
        <Route path="/android/app/Share-Media/Privacy-Policy" element={<ShareMediaPP/>} />
        <Route path="/android/app/Share-Media/Terms-and-Condition" element={<ShareMediaTandC />}/>
        <Route path="/android/app/Meme-Media/Privacy-Policy" element={<MemeMediaPP/>} />
        <Route path="/android/app/Meme-Media/Terms-and-Condition" element={<MemeMediaTandC />}/>
        <Route path="/Contact/form" element={<GoogleForm/>}/>
      </Routes>

      
    </Router>
  );
}

export default App;