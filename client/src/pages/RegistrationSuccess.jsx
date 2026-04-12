import React from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-8">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          🎉 Congratulations!
        </h1>
        <p className="text-gray-700 mb-6">Your registration was successful.</p>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
