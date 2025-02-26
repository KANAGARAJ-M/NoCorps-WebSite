import React from "react";
import styles from "../css/GoogleForm.module.css"; // Import custom styles


const GoogleForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Submit Your Details</h2>
      <iframe
        className={styles.embeddedForm}
        src="https://docs.google.com/forms/d/e/1FAIpQLSc4PTLe7A6V0yOKv1mndFIF1MEkjMuDTIcBXyqN513R2nuWUg/viewform?embedded=true" // Replace YOUR_FORM_ID
        width="100%"
        height="800px"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;

// <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc4PTLe7A6V0yOKv1mndFIF1MEkjMuDTIcBXyqN513R2nuWUg/viewform?embedded=true"