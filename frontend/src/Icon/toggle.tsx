import { useState } from "react";

export function Toggle() {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <div className={`h-screen ${dark ? "bg-black" : "bg-white"}`}></div>
      <div
        className="rounded-xl bg-purple-600 text-white"
        onClick={() => setDark(!dark)}
      ></div>
    </div>
  );
}
