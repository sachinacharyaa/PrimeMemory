import { Button } from "../component/ui/Button";
import { Input } from "../component/Input";

export function SignIn() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border-2 min-w-48 p-8">
        <Input placeholder="Username"></Input>
        <Input placeholder="Password"></Input>

        <div className="flex justify-center pt-4 cursor-pointer">
          <Button variant="primary" title="Signin" fullWidth={true}></Button>
        </div>
      </div>
    </div>
  );
}
