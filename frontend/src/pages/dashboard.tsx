import "../App.css";
import { Button } from "../component/ui/Button";
import { PlusIcon } from "../Icon/plusIcon";
import { ShareIcon } from "../Icon/shareIcon";
import { Card } from "../component/ui/card";
import { CreateContentModel } from "../component/ui/CreateContentModel";
import { useState } from "react";
import { SideBar } from "../component/SideBar";
import { useContent } from "../hooks/useContent"; // ✅ add this

export function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);

  const { contents, refresh } = useContent();

  return (
    <>
      <SideBar />

      {/* Main content */}
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModel
          open={modelOpen}
          onClose={() => setModelOpen(false)}
          onContentAdded={refresh}
        />

        <div className="flex justify-end gap-2">
          <Button
            onClick={() => setModelOpen(true)}
            variant="primary"
            size="md"
            title="Add Content"
            startIcon={PlusIcon}
          />

          <Button
            variant="secondary"
            size="md"
            title="Share Brain"
            startIcon={ShareIcon}
          />
        </div>

        {/* content */}
        <div className="flex gap-4 mt-4">
          {contents.map(({ type, link, title, _id }) => (
            <Card key={_id} type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
