import React from "react";
import "../App.css";

const UserIcon = ({ userName }) => {
  const userInitial = userName ? userName.charAt(0).toUpperCase() : "";

  return (
    <div className="user-icon">
      {userName ? (
        <div className="user-circle">
          <span className="user-initial">{userInitial}</span>
        </div>
      ) : (
        <div className="default-circle">X</div>
      )}
    </div>
  );
};

export default UserIcon;
