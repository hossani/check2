import React from 'react';

const ProfilePhoto = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/photo.jpg'} alt="Profile" />
    </div>
  );
};

export default ProfilePhoto;
