import React from 'react';
import LoginForm from '../components/Auth/LoginForm';
import axios from 'axios'; // Import axios to make API calls

const ParentComponent = () => {
  const handleLogin = async (username, password) => {
    try {
      // Perform an API call to authenticate user credentials
      const response = await loginUser(username, password);

      // Assuming the API response includes a token upon successful login
      const { token } = response.data;

      // Save the token to the browser's local storage or in a state management system like Redux
      localStorage.setItem('token', token);

      // If the API call is successful and a token is received, you can redirect the user to another page
      // For example, using React Router
      // history.push('/dashboard');

      // Or update the parent component's state to handle the user login
      // setLoggedIn(true);
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error, show error messages, etc.
    }
  };

  // Function to make API call for user login
  const loginUser = async (username, password) => {
    try {
      // Replace 'http://localhost:3000' with your actual backend API URL
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default ParentComponent;
