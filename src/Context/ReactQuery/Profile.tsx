import * as React from 'react';

const Profile = ({ library, data, handleEditProfile, handleSubmit }) => (
  <div>
    <button onClick={handleEditProfile} />
    <button onClick={handleSubmit} />
    <h1>Users from {library}</h1>
    {data.map((user) => (
      <p>
        이름: {user.name} <strong>나이: {user.age}</strong>
      </p>
    ))}
  </div>
);

export default Profile;
