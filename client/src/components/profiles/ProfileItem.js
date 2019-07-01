import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    gender,
    birthdate,
    location,
    fluentLanguages,
    learningLanguages
  }
}) => {
  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>
          {name},{" "}
          {Math.round(1970 + Date.now() / 31556952000) -
            birthdate.split("-")[0]}
          {"  "}
          {gender === "Male" && <i className="fas fa-mars fa-2x" />}
          {gender === "Female" && <i className="fas fa-venus fa-2x" />}
          {gender === "Other" && <i className="fas fa-neuter fa-2x" />}
        </h2>
        <p className="my-1">
          {location && (
            <span>
              {location} <i className="fas fa-map-pin fa-2x" />
            </span>
          )}
        </p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {fluentLanguages.slice(0, 4).map((fluentLanguage, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check" /> {fluentLanguage}
          </li>
        ))}
        {learningLanguages.slice(0, 4).map((learningLanguage, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-crosshairs" /> {learningLanguage}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
