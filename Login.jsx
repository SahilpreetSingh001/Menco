import React, { useState } from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(''); // State to store error message

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Login successful:', result.message);
        setLoginError('');
        navigate('/home'); 
      } else {
        const error = await response.json();
        setLoginError(error.message); 
      }
    } catch (error) {
      console.error('Error submitting login data:', error);
      setLoginError('An error occurred. Please try again.'); 
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Log in</h2>

        {/* Show error message if it exists */}
        {loginError && <p className="text-red-500 text-sm mb-3">{loginError}</p>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: 'Email is required' })}
            className={`w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:ring-blue-400`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Password is required' })}
            className={`w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } focus:ring-blue-400`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <button className="w-full py-2 mb-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <NavLink to="/signup" className="text-blue-500 hover:underline">
            Signup
          </NavLink>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t"></div>
          <span className="mx-3 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t"></div>
        </div>

        <button className="w-full py-2 mb-2 flex items-center justify-center border rounded-lg hover:bg-gray-100">
          <FaGoogle className="mr-2 text-red-500" /> Login with Google
        </button>
        <button className="w-full py-2 flex items-center justify-center border rounded-lg hover:bg-gray-100">
          <FaFacebookF className="mr-2 text-blue-600" /> Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
