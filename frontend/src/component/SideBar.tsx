import { Brain } from "../Icon/BrainIcon";
import { Twitter } from "../Icon/x";
import { Youtube } from "../Icon/Youtube";
import { SideBarItem } from "./ui/SidBarItem";

export function SideBar() {
  return (
    <div
      className="h-screen bg-white border-r w-76 fixed left-0 top-0
    pl-6"
    >
      <div className="flex text-2xl pt-8 items-center">
        <div className="pr-4 text-purple-600 ">
          <Brain></Brain>
        </div>
        <h1> PrimeMemory</h1>
      </div>

      <div className="pt-4">
        <SideBarItem text="Twitter" icon={<Twitter />} />
        <SideBarItem text="Youtube" icon={<Youtube />} />
      </div>
    </div>
  );
}
