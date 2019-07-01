import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    fluentLanguages,
    learningLanguages,
    user: { name }
  }
}) => (
  <div className="profile-about bg-light p-2">
    {bio && (
      <Fragment>
        <h2 className="text-primary">{name.trim().split(" ")[0]}'s Bio</h2>
        <p>{bio}</p>
        <div className="line" />
      </Fragment>
    )}
    <div className="languages">
      <h2 className="text-primary">I can teach you</h2>
      <div className="fluentLanguages">
        {fluentLanguages.map((fluentLanguage, index) => (
          <div key={index} className="p-1">
            <i className="fas fa-check" /> {fluentLanguage}
          </div>
        ))}
      </div>
      <h2 className="text-primary">I need help with</h2>
      <div className="learningLanguages">
        {learningLanguages.map((learningLanguage, index) => (
          <div key={index} className="p-1">
            <i className="fas fa-crosshairs" /> {learningLanguage}
          </div>
        ))}
      </div>
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
