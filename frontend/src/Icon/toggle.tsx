import { Button } from "../component/ui/Button";

interface ToogleProps {
  dark: boolean;
  onToggle: () => void;
}

export function Toggle({ dark, onToggle }: ToogleProps) {
  return (
    <div>
      <Button
        title={dark ? "Light Mode" : "Dark Mode"}
        size="md"
        variant="primary"
        onClick={onToggle}
      ></Button>
    </div>
  );
}
