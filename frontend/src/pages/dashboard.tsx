import "../App.css";
import { Button } from "../component/ui/Button";
import { PlusIcon } from "../Icon/plusIcon";
import { ShareIcon } from "../Icon/shareIcon";
import { Card } from "../component/ui/card";
import { CreateContentModel } from "../component/ui/CreateContentModel";
import { useEffect, useState } from "react";
import { SideBar } from "../component/SideBar";
import { useContent } from "../hooks/useContent"; // ✅ add this
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useParams } from "react-router-dom";

export function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);
  const { shareId } = useParams();
  const [sharedContents, setSharedContents] = useState([]);
  const [sharedUser, setSharedUser] = useState<string | null>(null);

  const { contents, refresh } = useContent();

  useEffect(() => {
    if (!shareId) {
      return;
    }

    const fetchShared = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/brain/${shareId}`,
        );
        setSharedContents(response.data.content || []);
        setSharedUser(response.data.username || null);
      } catch (error) {
        setSharedContents([]);
        setSharedUser(null);
      }
    };

    void fetchShared();
  }, [shareId]);

  const displayContents = shareId ? sharedContents : contents;

  return (
    <>
      {!shareId && <SideBar />}

      {/* Main content */}
      <div
        className={`p-4 min-h-screen bg-gray-100 border-2 ${
          shareId ? "" : "ml-72"
        }`}
      >
        {!shareId && (
          <CreateContentModel
            open={modelOpen}
            onClose={() => setModelOpen(false)}
            onContentAdded={refresh}
          />
        )}

        {!shareId && (
          <div className="flex justify-end gap-2">
            <Button
              onClick={() => setModelOpen(true)}
              variant="primary"
              size="md"
              title="Add Content"
              startIcon={PlusIcon}
            />

            <Button
              onClick={async () => {
                const token = localStorage.getItem("token");
                if (!token) {
                  alert("Please sign in first");
                  return;
                }

                try {
                  const response = await axios.post(
                    `${BACKEND_URL}/api/v1/brain/share`,
                    {
                      share: true,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    },
                  );
                  const shareurl = `http://localhost:5173/share/${response.data.hash}`;
                  alert(shareurl);
                } catch (error) {
                  alert("Failed to generate share link");
                }
              }}
              variant="secondary"
              size="md"
              title="Share Brain"
              startIcon={ShareIcon}
            />
          </div>
        )}

        {shareId && sharedUser && (
          <div className="mb-4 text-center text-gray-700">
            Shared by {sharedUser}
          </div>
        )}

        {/* content */}
        <div className="flex gap-4 mt-4 flex-wrap">
          {displayContents.map(({ type, link, title, _id }) => (
            <Card
              key={_id}
              type={type}
              link={link}
              title={title}
              contentId={!shareId ? _id : undefined}
              onDelete={!shareId ? refresh : undefined}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
