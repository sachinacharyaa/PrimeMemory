import { Button } from "../component/ui/Button";
import { Input } from "../component/Input";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  async function Signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
        username,
        password,
      });
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/dashboard");

      //redirect the user to the dashboard

      alert("You Signin successfully");
    } catch (error) {
      alert("Signin failed");
    }
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border-2 min-w-48 p-8">
        <Input ref={usernameRef} placeholder="Username"></Input>
        <Input ref={passwordRef} placeholder="Password" type="password"></Input>

        <div className="flex justify-center pt-4 cursor-pointer">
          <Button
            onClick={Signin}
            variant="primary"
            title="Signin"
            size="md"
            fullWidth={true}
          ></Button>
        </div>
      </div>
    </div>
  );
}
