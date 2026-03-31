import { Button } from "../component/ui/Button";
import { Input } from "../component/Input";
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
  function NavbarSignUp() {
    return (
      <header className="w-full bg-white shadow px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex text-2xl items-center">
            <div className="pr-4 text-purple-600 ">
              <Brain></Brain>
            </div>
            <h1> PrimeMemory</h1>
          </div>
        </div>
      </header>
    );
  }
  return (
    <div className="min-h-screen bg-gray-200">
      <NavbarSignUp />
      <main className="flex justify-center items-center h-[calc(100vh-64px)]">
        <div className="bg-white rounded-xl border-2 min-w-48 p-8">
          <Input ref={usernameRef} placeholder="Username"></Input>
          <Input
            ref={passwordRef}
            placeholder="Password"
            type="password"
          ></Input>

          <div className="flex justify-center pt-4 cursor-pointer">
            <Button
              onClick={signup}
              variant="primary"
              title="Signup"
              size="md"
              fullWidth={true}
            ></Button>
          </div>
        </div>
      </main>
    </div>
  );
}
