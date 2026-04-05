import { useEffect, useState } from "react";
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
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:cursor-pointer"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </header>
    );
  }
  function Body() {
    const images = [
      "https://images.unsplash.com/photo-1763041316817-36ffaa4d2c15",
      "https://images.unsplash.com/photo-1774205884988-e770d50eb523",
      "https://images.unsplash.com/photo-1773332611522-06b86b48cbf1",
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      if (images.length <= 1) return undefined;
      const intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 3000);

      return () => clearInterval(intervalId);
    }, [images.length]);

    return (
      <section className=" from-white via-white to-purple-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm">
            <span className="text-purple-600">✦</span>
            <span className="text-purple-700 font-medium">
              Future of Intelligent Memory is Here
            </span>
            <span className="text-gray-400">›</span>
          </div>

          <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 lg:text-5xl">
                One platform. From first idea to lasting recall.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                PrimeMemory connects your notes, meetings and decisions into a
                single second memory, ready whenever you need it.
              </p>

              <div className="mt-6 space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-purple-600" />
                  <span>
                    Capture decisions instantly and never lose context.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-purple-600" />
                  <span>Search across projects, people, and past work.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-purple-600" />
                  <span>Surface the best next steps with smart recall.</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 hover:cursor-pointer"
                  onClick={handleSignUp}
                >
                  Lets Start to Recall
                </button>
                <button className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:cursor-pointer">
                  See How It Works
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 top-10 h-40 w-40 rounded-full bg-purple-200/40 blur-3xl" />
              <div className="absolute -left-8 bottom-4 h-48 w-48 rounded-full bg-pink-200/40 blur-3xl" />

              <div className="relative overflow-hidden  bg-white shadow-2xl ring-1 ring-black/5">
                <div
                  className="flex h-[420px] transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  aria-live="polite"
                >
                  {images.map((src, index) => (
                    <div className="h-full w-full flex-shrink-0" key={src}>
                      <img
                        src={src}
                        alt={`Second memory view ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute left-6 top-6 rounded-2xl bg-white/95 px-4 py-3 text-xs font-semibold text-gray-700 shadow-lg">
                  Smart Recall
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                {images.map((_, index) => (
                  <span
                    key={`dot-${index}`}
                    className={`h-2.5 w-2.5 rounded-full ${
                      index === activeIndex ? "bg-purple-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
