import "./App.css";
import { Button } from "./component/ui/Button";
import { PlusIcon } from "./Icon/plusIcon";
import { ShareIcon } from "./Icon/shareIcon";
import { Card } from "./component/ui/card";
import { CreateContentModel } from "./component/ui/CreateContentModel";

function App() {
  return (
    <>
      <CreateContentModel open={true} />
      <div className="flex justify-end">
        <Button
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
    </>
  );
}

export default App;
