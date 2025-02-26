import React from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import "../css/PolicyButtons.css"; // Import CSS for styling




function Policy() {
    const navigate = useNavigate();
    return(
        
            <div className="policy-container">
                <h2>NoCorps Website</h2>
                <div className="button-group">
                    <button onClick={() => navigate("/web/NoCorps/privacy-policy")} className="policy-btn">
                        Privacy Policy
                    </button>
                    <button onClick={() => navigate("/web/NoCorps/t&c")} className="policy-btn">
                        Terms & Conditions
                    </button>
                    {/* <button onClick={() => navigate("/refund-policy")} className="policy-btn">
                        Refund Policy
                    </button> */}
                    <button onClick={() => navigate("/web/NoCorps/cookie-policy")} className="policy-btn">
                        Cookie Policy
                    </button>
                </div>


                <h2>AIC Coin</h2>
                <div className="button-group">
                    <button onClick={() => navigate("/android/app/AICCoin/Privacy-Policy")} className="policy-btn">
                        Privacy Policy
                    </button>
                    <button onClick={() => navigate("/android/app/AICCoin/Terms-and-Conditions")} className="policy-btn">
                        Terms & Conditions
                    </button>
                    {/* <button onClick={() => navigate("/refund-policy")} className="policy-btn">
                        Refund Policy
                    </button>
                    <button onClick={() => navigate("/cookie-policy")} className="policy-btn">
                        Cookie Policy
                    </button> */}
                </div>

                <h2>ShareMedia</h2>
                <div className="button-group">
                    <button onClick={() => navigate("/android/app/Share-Media/Privacy-Policy")} className="policy-btn">
                        Privacy Policy
                    </button>
                    <button onClick={() => navigate("/android/app/Share-Media/Terms-and-Condition")} className="policy-btn">
                        Terms & Conditions
                    </button>
                    {/* <button onClick={() => navigate("/refund-policy")} className="policy-btn">
                        Refund Policy
                    </button>
                    <button onClick={() => navigate("/cookie-policy")} className="policy-btn">
                        Cookie Policy
                    </button> */}
                </div>


                <h2>Meme Media</h2>
                <div className="button-group">
                    <button onClick={() => navigate("/android/app/Meme-Media/Privacy-Policy")} className="policy-btn">
                        Privacy Policy
                    </button>
                    <button onClick={() => navigate("/android/app/Meme-Media/Terms-and-Condition")} className="policy-btn">
                        Terms & Conditions
                    </button>
                    {/* <button onClick={() => navigate("/refund-policy")} className="policy-btn">
                        Refund Policy
                    </button>
                    <button onClick={() => navigate("/cookie-policy")} className="policy-btn">
                        Cookie Policy
                    </button> */}
                </div>



                <h2>ChatUp</h2>
                <div className="button-group">
                    <button onClick={() => navigate("/android/app/Chat-Up/Privacy-Policy")} className="policy-btn">
                        Privacy Policy
                    </button>
                    <button onClick={() => navigate("/android/app/Chat-Up/Terms-and-Condition")} className="policy-btn">
                        Terms & Conditions
                    </button>
                    {/* <button onClick={() => navigate("/refund-policy")} className="policy-btn">
                        Refund Policy
                    </button>
                    <button onClick={() => navigate("/cookie-policy")} className="policy-btn">
                        Cookie Policy
                    </button> */}
                </div>

            </div>
        
    );
}

export default Policy;