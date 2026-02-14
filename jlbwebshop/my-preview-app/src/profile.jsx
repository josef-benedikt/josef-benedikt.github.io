import React from 'react';
import userData from './profile.json';
import './styles.css';

const Profile = () => {
  return (
    <div className="about">
      <h1>User Profile</h1>
      <p>Username: {userData.username}</p>
      <p>Email Address: {userData.email}</p>
      <p>Contact Number: {userData.contact}</p>
      <p>Home Address: {userData.address}</p>
    </div>
  );
};

export default Profile;