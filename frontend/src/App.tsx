import "./App.css";
import { Button } from "./component/ui/Button";
import { PlusIcon } from "./Icon/plusIcon";
import { ShareIcon } from "./Icon/shareIcon";
import { Card } from "./component/ui/card";
import { CreateContentModel } from "./component/ui/CreateContentModel";
import { useState } from "react";
import { SideBar } from "./component/SideBar";

function App() {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <>
      <SideBar></SideBar>
      {/* Main content */}
      <div className="p-4 ml-72 h-min-screen bg-gray-100 border-2">
        <CreateContentModel
          open={modelOpen}
          onClose={() => {
            setModelOpen(false);
          }}
        />
        <div className="flex justify-end">
          <Button
            onClick={() => {
              setModelOpen(true);
            }}
            variant={"primary"}
            size="md"
            title={"Add Content"}
            startIcon={PlusIcon}
          ></Button>

          <Button
            variant={"secondary"}
            size="md"
            title={"Share Brain"}
            startIcon={ShareIcon}
          ></Button>
        </div>

        <div className="flex gap-4">
          <Card
            type="twitter"
            link="https://x.com/sachinnacharya/status/2028888621005324351"
            title="First Tweet"
          ></Card>

          <Card
            type="youtube"
            link="https://youtu.be/BTCdAVWNVcc?si=Dqnls1HsHjbTbY5j"
            title="First Video"
          />
        </div>
      </div>
    </>
  );
}

export default App;
