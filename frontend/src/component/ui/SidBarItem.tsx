import type { ReactElement } from "react";

export function SideBarItem({text, icon}:{
    text: string,
    icon: ReactElement;
}){
    return <div className="flex">
        <div className="p-4">
        {icon} 
        </div>
        <div className="p-4">
             {text}
        </div>
    </div>
}