import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Voting Platform</h1>
        <p className="text-lg mb-6">Your voice matters! Easily view candidates, vote, and manage profiles.</p>
        <Link to="/vote">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600">
            Get Started
          </button>
        </Link>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Candidates */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Candidates</h2>
            <p className="text-gray-700 mb-4">Explore the list of candidates running for election.</p>
            <Link to="/candidates">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Candidates
              </button>
            </Link>
          </div>

          {/* Vote */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Vote</h2>
            <p className="text-gray-700 mb-4">Cast your vote for your preferred candidate.</p>
            <Link to="/vote">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Vote Now
              </button>
            </Link>
          </div>

          {/* Profile */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            <p className="text-gray-700 mb-4">View and manage your profile details.</p>
            <Link to="/profile">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Profile
              </button>
            </Link>
          </div>

          {/* Add Candidate */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Add Candidate</h2>
            <p className="text-gray-700 mb-4">Admins can add new candidates for the election.</p>
            <Link to="/add-candidate">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Candidate
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Voting Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
