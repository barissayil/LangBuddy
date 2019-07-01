import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    gender,
    location,
    social,
    birthdate,
    user: { name, avatar }
  }
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">
        {gender === "Male" && <i className="fas fa-mars fa-2x" />}
        {gender === "Female" && <i className="fas fa-venus fa-2x" />}
        {gender === "Other" && <i className="fas fa-neuter fa-2x" />}
        {name},{" "}
        {Math.round(1970 + Date.now() / 31556952000) - birthdate.split("-")[0]}{" "}
      </h1>
      <h1 className="large" />
      <p className="lead" />
      <p>
        {location && (
          <span>
            {location} <i className="fas fa-map-pin fa-2x" />
          </span>
        )}
      </p>
      <div className="icons my-1">
        {social && social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x" />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x" />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x" />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
