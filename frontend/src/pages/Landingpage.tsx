// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../component/ui/Button";
// import { Toggle } from "../Icon/toggle";
import { Brain } from "../Icon/BrainIcon";
import { useNavigate } from "react-router-dom";
//Navbar//
export function LandingPage() {
  const navigate = useNavigate();
  function handleSignUp() {
    navigate("/signup");
  }

  function Navbar() {
    return (
      <header className="w-full bg-white shadow px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex text-2xl items-center">
            <div className="pr-4 text-purple-600 ">
              <Brain></Brain>
            </div>
            <h1> PrimeMemory</h1>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-gray-700">
            {/* Left-side pill */}

            <p className="cursor-pointer hover:text-purple-600">Home</p>
            <p className="cursor-pointer hover:text-purple-600">Product</p>
            <p className="cursor-pointer hover:text-purple-600">About</p>
          </div>

          {/* Button */}
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </header>
    );
  }
  function Body() {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
        <span className="text-purple-600">✦</span>
        <span className="text-purple-600 font-medium">
          Future of Intelligent Memory is Here
        </span>
        <span className="text-gray-400">›</span>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
}
export default LandingPage;
