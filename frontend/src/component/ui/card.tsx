import { ShareIcon } from "../../Icon/shareIcon";

export function Card(){
    return <div>
        <div className="p-8 bg-white rounded-md shadow-md border-slate-300
        max-w-96 border">
            <div  className="flex justify-between">
            <ShareIcon size = {"md"}></ShareIcon>
            </div>

            <div className="flex">
                
            <ShareIcon size = {"md"}>
            </ShareIcon>

            <ShareIcon size = {"md"}></ShareIcon>
            </div>

        </div>
    </div>
}