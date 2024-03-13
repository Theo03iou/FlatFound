// CreateProfile.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProfileData {
  username: string;
  bio: string;
  profilePicture: File | null;
}

const CreateProfile: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({ username: '', bio: '', profilePicture: null });
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement; // Typecasting to HTMLInputElement to access 'files'
    const { name, value, files } = target;
    
    if (files) {
      setProfileData({ ...profileData, profilePicture: files[0] });
    } else {
      setProfileData({ ...profileData, [name]: value });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would handle the profile creation logic, such as sending the data to a server.
    // For now, we'll just log to the console and navigate to a placeholder 'profile' route.
    console.log(profileData);
    navigate('/profile'); // Redirect to the profile page, or a 'thank you' page, etc.
  };

  return (
    <div>
      <h1>Create Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={profileData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={profileData.bio}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default CreateProfile;
