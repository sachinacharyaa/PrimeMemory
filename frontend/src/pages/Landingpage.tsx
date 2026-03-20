import { useNavigate } from "react-router-dom";
import { Button } from "../component/ui/Button";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1>Hello There, Its A Landing Page</h1>
      </div>

      <div className=" h-screen flex justify-center items-center gap-4">
        <div>
          <Button
            onClick={() => navigate("/signin")}
            variant="primary"
            title="Signin"
            size="md"
          />
        </div>

        <Button
          onClick={() => navigate("/signup")}
          variant="secondary"
          title="Signup"
          size="md"
        />
      </div>
    </div>
  );
}
