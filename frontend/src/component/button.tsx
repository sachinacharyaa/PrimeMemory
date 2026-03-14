
// import type { ReactNode } from 'react'

// //interface let you define the type 
// export interface ButtonProps {
//  variant: "primary" | "secondary" ;
//  size : "sm" | "md" | "lg";
//  text: string;
//  startIcon?: ReactNode;
//  endIcon?: ReactNode;
//  onClick?: () => void;
// }

// const variantStyles = {
//   "primary": "bg-purple-600 text-white",
//   "secondary": "bg-purple-400 text-purple-600"
// }

// const sizeStyles = {
//   "sm" : "p-3",
//   "md" : "p-6",
//   "lg" : "p-10",

// }
// const defaultStyles = "rounded-md flex"



// export const Button = (props: ButtonProps) => {
//     //props.onClick contain below onClick function
//   return (
//   <button
//     className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}
//     onClick={props.onClick}
//   >
//     {props.startIcon ? <div className="pr-3">{props.startIcon}</div>: null}
//     {props.text}
//     {props.endIcon} 
//   </button>
// );
// } 
// //{variantStyles[props.variant]} = "primary" or "secondary"

