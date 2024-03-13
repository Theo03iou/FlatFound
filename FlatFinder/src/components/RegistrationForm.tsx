// RegistrationForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

import './RegistrationForm.css';

interface UserRegistration {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<UserRegistration>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const isPasswordStrong = (password: string) => {
    // This regex checks for at least one number, one lowercase, one uppercase letter, 
    // and allows (but does not require) special characters including /
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#\$%\^&\*/]{8,}$/;
    return strongPasswordRegex.test(password);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // Check for empty fields
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Check if password is strong
    if (!isPasswordStrong(formData.password)) {
      alert('Your password is not strong enough. It must contain at least one number, one lowercase and one uppercase letter, and be at least 8 characters long.');
      return;
    }
  
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
  
    // If all checks pass, navigate to the Create Profile page
    navigate('/create-profile');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
      <button type="button" onClick={() => window.location.href = '/signin'}>Sign In</button>
    </form>
  );
};

export default RegistrationForm;



