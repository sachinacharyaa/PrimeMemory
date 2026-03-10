
//interface let you define the type 
export interface ButtonProps {
 variant: "primary" | "secondary" ;
 size : "sm" | "md" | "lg";
 text: string;
 startIcon: any; //worse because num and string supports
 endIcon: any;
 onClick : () => void;
}


export const Button = (props: ButtonProps) => {
    //props.onClick contain below onClick function
  return <button></button>
}

<Button variant = "primary" size = "md" 
onClick={() =>{}}
 text = {"sac"} 
 startIcon = {"Y"} 
 endIcon={"x"}/>