import React from 'react';

const ProfilePhoto = () => {
      /* ici on trouve ma photo de profile */

  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/photo.jpg'} alt="Profile" />
    </div>
  );
};

export default ProfilePhoto;
