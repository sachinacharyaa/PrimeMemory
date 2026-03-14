import type { ReactElement } from "react";

interface ButtonInterface{

  //here we are saying, that  input can be string and also React Elements
    title: string | ReactElement;
    size: "lg" | "sm" | "md";
    endIcon?: ReactElement;
    StartIcon?: ReactElement;
    variant : "primary" |"secondary";
}


const sizeStyles = {
    "lg" : "px-8 py-4 text-xl rounded-xl ",
    "md" : "px-4 py-2 text-md rounded-md ",
    "sm" : "px-4 py-1  text-sm rounded-sm"
}



const variantStyles = {
   "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600"
}
//props, means it look like
export function Button(props: ButtonInterface){


return (
  <button className={sizeStyles[props.size] + " " +
    " " + variantStyles[props.variant]
  }
>
  <div className = "flex item-center"   >
    {props.StartIcon}
    <div className="pl-3 pr-3">
    {props.title}
      </div>
    {props.endIcon}
    </div> 
  </button>
)
}
