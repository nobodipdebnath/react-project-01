import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    // মূল কন্টেইনার
    <div className="flex items-center py-20 justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-white rounded-lg shadow-md">
        {/* হেডিং */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-[#00B207] hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        {/* ফর্ম */}
        <form className="space-y-6">
          {/* ইউজারনেম ইনপুট */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00B207] focus:border-[#00B207]"
                placeholder="Choose a username"
              />
            </div>
          </div>

          {/* ইমেইল ইনপুট */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00B207] focus:border-[#00B207]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* পাসওয়ার্ড ইনপুট */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00B207] focus:border-[#00B207]"
                placeholder="Create a password"
              />
            </div>
          </div>
          
          {/* কনফার্ম পাসওয়ার্ড ইনপুট */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="mt-1">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00B207] focus:border-[#00B207]"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          {/* সাবমিট বাটন */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-[#00B207] rounded-md hover:bg-[#009f06] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B207] transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
