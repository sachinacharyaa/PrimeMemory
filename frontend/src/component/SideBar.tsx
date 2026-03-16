import { Twitter } from "../Icon/x";
import { Youtube } from "../Icon/Youtube";
import { SideBarItem } from "./ui/SidBarItem";


export function SideBar(){
    return<div className="h-screen bg-white border-r w-76 fixed left-0 top-0">

        <div className="pt-4">
            <SideBarItem text = "Twitter" icon = {<Twitter />} />
            <SideBarItem text = "Youtube" icon = {<Youtube />} />

        </div>
    </div>
}