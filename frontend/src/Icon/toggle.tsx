import { Button } from "../component/ui/Button";

interface ToggleProps {
  dark: boolean;
  onToggle: () => void;
}

export function Toggle({ dark, onToggle }: ToggleProps) {
  return (
    <Button
      title={dark ? "Light Mode" : "Dark Mode"}
      size="md"
      variant="secondary"
      onClick={onToggle}
    />
  );
}
