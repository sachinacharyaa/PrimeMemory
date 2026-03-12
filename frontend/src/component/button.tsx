
//interface let you define the type 
export interface ButtonProps {
 variant: "primary" | "secondary" ;
 size : "sm" | "md" | "lg";
 text: string;
 startIcon: any; //worse because num and string supports
 endIcon: any;
 onClick : () => void;
}

const variantStyles = {
  "primary": "bg-purple-600 text-white",
  "secondary": "bg-purple-400 text-purple-600"
}

const sizeStyles = {
  "sm" : "p-3",
  "md" : "p-6",
  "lg" : "p-10",

}
const defaultStyles = "rounded-md p-4"



export const Button = (props: ButtonProps) => {
    //props.onClick contain below onClick function
  return (
  <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
    {props.text}
  </button>
);
} 
//{variantStyles[props.variant]} = "primary" or "secondary"


<Button variant = "primary" size = "md" 
onClick={() =>{}}
 text = {"sac"} 
 startIcon = {"Y"} 
 endIcon={"x"}/>