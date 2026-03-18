import type { ReactElement } from "react";

interface ButtonInterface {
  //here we are saying, that  input can be string and also React Elements
  title: string | ReactElement;
  size: "lg" | "sm" | "md";
  endIcon?: React.ElementType;
  startIcon?: React.ElementType;
  variant: "primary" | "secondary";
  onClick?: () => void;
  fullWidth?: boolean; // ✅ add this
  loading?: boolean;
}

const sizeStyles = {
  lg: "px-8 py-4 text-xl rounded-xl ",
  md: "px-4 py-2 text-md rounded-md ",
  sm: "px-4 py-1  text-sm rounded-sm",
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-400 text-purple-600",
};
//props, means it look like
export function Button(props: ButtonInterface) {
  return (
    <button
      onClick={props.onClick}
      className={
        sizeStyles[props.size] +
        " " +
        variantStyles[props.variant] +
        " " +
        defaultStyles +
        (props.fullWidth ? " w-full flex justify-center items-center" : "")
      }
    >
      <div className="flex  items-center">
        {props.startIcon && <props.startIcon size={props.size} />}
        <div className="pl-3 pr-3">{props.title}</div>
        {props.endIcon && <props.endIcon size={props.size} />}
      </div>
    </button>
  );
}
