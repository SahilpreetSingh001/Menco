import React, { useState } from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  
  const navigate = useNavigate();

  // State to hold any error messages
  const [serverError, setServerError] = useState("");

  const onSubmit = async (data) => {
    setServerError("");  // Clear any previous errors
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Check if response is successful or user already exists
      if (response.ok) {
        const prompt = data.name;
        navigate('/home', { state: { prompt } }); 
      } else if (result.message === "User already exists") {
        // Set the error message to be displayed
        setServerError("This user already exists. Please log in or use a different email.");
      } else {
        setServerError("An error occurred. Please try again.");
      }

    } catch (error) {
      console.error('Error submitting signup data:', error);
      setServerError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign up</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" 
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            className='w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 '
          />
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            })}
            placeholder="Email"
            className={`w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            className={`w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) => {
                const { password } = getValues();
                return value === password || "Passwords do not match";
              },
            })}
            placeholder="Confirm Password"
            className={`w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}

          {/* Display server error message */}
          {serverError && (
            <p className="text-red-500 text-sm mb-3">{serverError}</p>
          )}

          <button type="submit" className="w-full py-2 mb-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Sign up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <NavLink to="/login" className="text-blue-500 hover:underline">
            Login
          </NavLink>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t"></div>
          <span className="mx-3 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t"></div>
        </div>

        <button className="w-full py-2 mb-2 flex items-center justify-center border rounded-lg hover:bg-gray-100">
          <FaGoogle className="mr-2 text-red-500" /> Sign up with Google
        </button>
        <button className="w-full py-2 flex items-center justify-center border rounded-lg hover:bg-gray-100">
          <FaFacebookF className="mr-2 text-blue-600" /> Sign up with Facebook
        </button>
      </div>
    </div>
  );
};

export default Signup;
