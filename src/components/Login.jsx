import React, { useState } from 'react';
import { Facebook, Twitter, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import farmer from '../assets/farmer.jpg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className='flex flex-col md:flex-row h-screen'>
      {/* Left side with image (hidden on small screens) */}
      <div className='hidden md:flex w-1/2 h-full'>
        <img src={farmer} alt="Farmer" className='w-full h-full object-cover' />
      </div>

      {/* Right side with form */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-8'>
        <h2 className='text-2xl md:text-3xl font-bold mb-2'>Login</h2>
        <p className='mb-4 text-sm md:text-base'>Login to your account</p>

        <form className='flex flex-col w-full md:w-3/4'>


          {/* Email Input */}
          <div className='flex items-center border border-gray-300 rounded p-2 mb-4'>
            <Mail className="mr-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              required
              className='outline-none w-full text-sm md:text-base'
            />
          </div>

          {/* Password Input */}
          <div className='flex items-center border border-gray-300 rounded p-2 mb-4 relative'>
            <Lock className="mr-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className='outline-none w-full text-sm md:text-base pr-10'
            />
            <span
              className="absolute right-3 cursor-pointer text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </span>
          </div>

          {/* Sign Up Button */}
          <button type="submit" className='bg-blue-500 text-white py-2 rounded mb-4 hover:bg-blue-600 transition'>
            Login
          </button>
        </form>

        <p className='mb-2 text-sm'>Or Login in with</p>

        {/* Social Buttons */}
        <div className='flex space-x-4 mb-4'>
          <button className='flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100'>
            <Facebook />
            <span>Facebook</span>
          </button>
          <button className='flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100'>
            <Twitter />
            <span>Twitter</span>
          </button>
        </div>

        {/* Login Link */}
        <p className='text-sm'>
          Already have an account?{' '}
          <Link to="/signup" className='text-blue-500 hover:underline'>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
