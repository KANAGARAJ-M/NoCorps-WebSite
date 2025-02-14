import React from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import "../css/PolicyButtons.module.css"; // Import CSS for styling

const PolicyButtons = () => {
    const navigate = useNavigate();

    return (
        <div className="policy-container">
            <h2>NoCorps Website</h2>
            <div className="button-group">
                <button onClick={() => navigate("/privacy-policy")} className="policy-btn">
                    Privacy Policy
                </button>
                <button onClick={() => navigate("/terms-and-conditions")} className="policy-btn">
                    Terms & Conditions
                </button>
                <button onClick={() => navigate("/refund-policy")} className="policy-btn">
                    Refund Policy
                </button>
                <button onClick={() => navigate("/cookie-policy")} className="policy-btn">
                    Cookie Policy
                </button>


                
            </div>

            <h2>Share Media</h2>
            <div className="button-group">
                <button onClick={() => navigate("/privacy-policy")} className="policy-btn">
                    Privacy Policy
                </button>
                <button onClick={() => navigate("/terms-and-conditions")} className="policy-btn">
                    Terms & Conditions
                </button>
                <button onClick={() => navigate("/refund-policy")} className="policy-btn">
                    Refund Policy
                </button>
                <button onClick={() => navigate("/cookie-policy")} className="policy-btn">
                    Cookie Policy
                </button>


                
            </div>
        </div>
    );
};

export default PolicyButtons;
