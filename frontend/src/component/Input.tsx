import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  type?: "text" | "password";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = "text" }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          placeholder={placeholder}
          type={type}
          className="px-4 py-2 w-64 text-center border rounded m-2"
        ></input>
      </div>
    );
  },
);

Input.displayName = "Input";
