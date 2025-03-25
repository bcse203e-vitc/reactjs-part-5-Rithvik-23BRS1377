import React from "react";
import PropTypes from "prop-types";
import "./ProfileCard.css"; // Import external CSS
import styles from "./ProfileCard.module.css"; // Import CSS module

const ProfileCard = ({ name, age, location }) => {
  // Inline styles for dynamic styling
  const inlineStyles = {
    border: "2px solid #007bff",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
  };

  return (
    <div className="card-container">
      <div className={styles.card}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.age}>Age: {age}</p>
        <p className={styles.location} style={inlineStyles}>
          Location: {location}
        </p>
      </div>
    </div>
  );
};

// Props validation
ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default ProfileCard;
