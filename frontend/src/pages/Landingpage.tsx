// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../component/ui/Button";
// import { Toggle } from "../Icon/toggle";
import { Brain } from "../Icon/BrainIcon";

//Navbar//
export function LandingPage() {
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
          <div className="flex gap-6 text-gray-700">
            <p className="cursor-pointer hover:text-purple-600">Home</p>
            <p className="cursor-pointer hover:text-purple-600">Product</p>
            <p className="cursor-pointer hover:text-purple-600">About</p>
          </div>

        {/* Button */}
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
            Login
          </button>
        </div>
      </header>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-8"></main>
    </div>
  );
}
export default LandingPage;
