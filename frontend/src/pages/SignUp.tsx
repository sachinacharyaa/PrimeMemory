import { Button } from "../component/ui/Button";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Brain } from "../Icon/BrainIcon";
export function SignUp() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    if (!username || !password) {
      alert("Username and password are required");
      return;
    }

    try {
      await axios.post(BACKEND_URL + "/api/v1/signup", {
        username,
        password,
      });
      navigate("/signin");
      alert("You signup successfully");
    } catch (error) {
      alert("Signup failed");
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[2fr_3fr]">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#5a38ff] via-[#6b4dff] to-[#9a5bff] px-8 py-10 lg:px-14 lg:py-12">
          <div className="absolute -left-20 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-28 -right-10 h-80 w-80 rounded-full bg-black/20 blur-3xl"></div>

          <header className="relative z-10 flex items-center gap-3 text-white/90">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
              <Brain></Brain>
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                PrimeMemory
              </p>
              <p className="text-lg font-semibold">Capture the important</p>
            </div>
          </header>

          <div className="relative z-10 mt-12 max-w-xl">
            <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Memory Capsule
                  </p>
                  <p className="text-lg font-semibold">Project Atlas</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
                  Synced
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-2xl bg-slate-100 px-3 py-3">
                  <p className="text-xs text-slate-500">Notes</p>
                  <p className="font-semibold text-slate-900">128</p>
                </div>
                <div className="rounded-2xl bg-slate-100 px-3 py-3">
                  <p className="text-xs text-slate-500">Highlights</p>
                  <p className="font-semibold text-slate-900">56</p>
                </div>
                <div className="rounded-2xl bg-slate-100 px-3 py-3">
                  <p className="text-xs text-slate-500">Links</p>
                  <p className="font-semibold text-slate-900">24</p>
                </div>
              </div>
              <button className="mt-5 w-full rounded-xl bg-[#6b4dff] px-4 py-2 text-sm font-semibold text-white">
                Organize Memories
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/90">
              <span className="rounded-full bg-white/15 px-4 py-2">
                Neural Search
              </span>
              <span className="rounded-full bg-white/15 px-4 py-2">
                Focus Mode
              </span>
              <span className="rounded-full bg-white/15 px-4 py-2">
                Shared Vaults
              </span>
              <span className="rounded-full bg-white/15 px-4 py-2">
                Auto Summaries
              </span>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-semibold text-white">
                Built for lasting clarity
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                PrimeMemory keeps your knowledge organized, searchable and ready
                when inspiration strikes. Sync across devices and never lose a
                thought again.
              </p>
            </div>
          </div>
        </section>

        <section className="relative flex items-center justify-center bg-[#0f1218] px-6 py-12">
          {/* <div className="absolute right-8 top-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
            <span className="h-3 w-3 rounded-full border border-white/40"></span>
            <span className="h-3 w-3 rounded-full border border-white/40"></span>
            <span className="h-3 w-3 rounded-full border border-white/40"></span>
          </div> */}

          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#151a21]/90 p-8 shadow-2xl backdrop-blur">
            <div className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6b4dff] text-white">
                <Brain></Brain>
              </span>
              <h1 className="mt-4 text-2xl font-semibold">
                Create your PrimeMemory
              </h1>
              <p className="mt-1 text-sm text-white/60">
                Start capturing your best ideas.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <label className="block text-sm font-medium text-white/80">
                Email <span className="text-red-400">*</span>
                <input
                  ref={usernameRef}
                  placeholder="you@primememory.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f1218] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#7c5bff] focus:outline-none focus:ring-2 focus:ring-[#7c5bff]/30"
                ></input>
              </label>

              <label className="block text-sm font-medium text-white/80">
                Password <span className="text-red-400">*</span>
                <div className="relative mt-2">
                  <input
                    ref={passwordRef}
                    placeholder="Create a password"
                    type="password"
                    className="w-full rounded-xl border border-white/10 bg-[#0f1218] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#7c5bff] focus:outline-none focus:ring-2 focus:ring-[#7c5bff]/30"
                  ></input>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50"
                  >
                    Show
                  </button>
                </div>
              </label>
            </div>

            <div className="mt-6">
              <Button
                onClick={signup}
                variant="primary"
                title="Create Account"
                size="md"
                fullWidth={true}
              ></Button>
            </div>

            <p className="mt-4 text-center text-sm text-white/60  ">
              Already have an account?{" "}
              <button
                className="text-[#7c5bff] hover:text-[#9a7bff] hover:cursor-pointer "
                onClick={() => navigate("/signin")}
              >
                Sign In
              </button>
            </p>

            <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-white/50 hover:cursor-pointer">
              By creating an account, you agree to our Terms & Privacy Policy.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
