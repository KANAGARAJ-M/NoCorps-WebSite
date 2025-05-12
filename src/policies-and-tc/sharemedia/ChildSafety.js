import React from "react";
import "../../css/PrivacyPolicy.css"; // Import CSS for styling

const WavoraCSAE = () => {
    return (
        <div className="privacy-container">
            <h1>Child Safety standards</h1>
            <h2>Wavora</h2>
            <p>Last updated: March 25, 2025</p>
            <section>
                <p>We take the safety of children on our platform seriously and are committed to maintaining a secure environment free from child sexual abuse and exploitation. As part of this commitment, we adhere to the following Child Safety Standards policy, applicable particularly to apps in the Social and Dating categories.</p>
            </section>

            <section>
                <h2>Overview</h2>
                <p>Our Child Safety Standards policy requires apps to:</p>
                <ul>
                    <li>Publish clear standards against child sexual abuse and exploitation (CSAE).</li>
                    <li>Provide an in-app mechanism for user feedback.</li>
                    <li>Address child sexual abuse material (CSAM) promptly and effectively.</li>
                    <li>Comply with child safety laws and regulations.</li>
                    <li>Offer a designated child safety point of contact.</li>
                </ul>
            </section>

            <section>
                <h2>Developer Responsibilities</h2>
                <p>All developers are required to:</p>
                <ul>
                    <li>Implement strict age verification measures to prevent minors from accessing inappropriate content.</li>
                    <li>Use advanced content moderation tools to detect and remove harmful material.</li>
                    <li>Train staff to recognize and handle child safety issues effectively.</li>
                    <li>Regularly audit and update safety policies to reflect evolving standards.</li>
                </ul>
            </section>

            <section>
                <h2>Timeline Information</h2>
                <p>We anticipate the following timeline for the rollout of our Child Safety Standards policy. Please note that these dates are subject to change.</p>
                <ul>
                    <li><strong>April 2024:</strong> Announcement of the new Child Safety Standards policy.</li>
                    <li><strong>December 2024:</strong> Declaration forms available in the Play Console for in-scope apps.</li>
                    <li><strong>January 22, 2025:</strong> Deadline for developers to submit declaration forms. Failure to comply will result in blocked app updates.</li>
                    <li><strong>March 19, 2025:</strong> Full policy compliance becomes mandatory. Non-compliant apps may be removed from the Play Store.</li>
                </ul>
            </section>

            <section>
                <h2>Enforcement Actions</h2>
                <p>Failure to comply with the Child Safety Standards policy may result in:</p>
                <ul>
                    <li>Warnings and notification of violations.</li>
                    <li>Temporary suspension of app updates.</li>
                    <li>Removal of the app from the Play Store.</li>
                    <li>Possible termination of the developer account for severe violations.</li>
                </ul>
            </section>

            <section>
                <h2>Frequently Asked Questions</h2>
                <h3>What category of apps are in scope for this policy?</h3>
                <p>Apps in the Social and Dating categories are required to comply with this policy.</p>

                <h3>How do I know if my app is part of the Social or Dating category?</h3>
                <p>You can check your app classification in the Play Console or contact support for clarification.</p>

                <h3>What if my app is not for kids or is age-gated for adults?</h3>
                <p>All apps in the specified categories must comply, regardless of target audience. Age gating does not exempt developers from adhering to child safety standards.</p>

                <h3>How do you define CSAE?</h3>
                <p>Child Sexual Abuse and Exploitation (CSAE) includes any behavior or content that sexually exploits, abuses, or endangers children. This covers grooming, sextortion, child trafficking for sex, and other forms of sexual exploitation.</p>

                <h3>How can I report a violation of this policy?</h3>
                <p>Users and developers can report any violations or concerns through our in-app feedback mechanism or by contacting our designated child safety team.</p>
            </section>

            <section>
                <p>We are dedicated to maintaining a safe environment for all users. For more information, or to report any safety concerns, please contact our child safety point of contact listed on our platform.</p>
            </section>
        </div>
    );
}

export default WavoraCSAE;    
