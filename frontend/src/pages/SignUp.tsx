import { Button } from "../component/ui/Button";
import { Input } from "../component/Input";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border-2 min-w-48 p-8">
        <Input ref={usernameRef} placeholder="Username"></Input>
        <Input ref={passwordRef} placeholder="Password" type="password"></Input>

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
    </div>
  );
}
