import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../component/ui/Button";
import { Toggle } from "../Icon/toggle";

export function LandingPage() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        dark ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* 🔝 Navbar */}
      <div className="flex justify-end p-4">
        <Toggle dark={dark} onToggle={() => setDark(!dark)} />
      </div>

      {/* 🎯 Main Content */}
      <div className="flex flex-col items-center gap-6 pt-6">
        <h1 className="text-xl font-semibold">
          Hello There, Its A Landing Page
        </h1>

        <div className="flex gap-4">
          <Button
            onClick={() => navigate("/signin")}
            variant="primary"
            title="Signin"
            size="md"
          />

          <Button
            onClick={() => navigate("/signup")}
            variant="secondary"
            title="Signup"
            size="md"
          />
        </div>
      </div>
    </div>
  );
}
