import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Button } from "./Button";
import { CrossIcon } from "../../Icon/crossIcon";

interface UpdateContentModelProps {
  contentId: string;
  initialTitle: string;
  initialLink: string;
  initialType: "youtube" | "twitter" | "x";
  onContentUpdated?: () => void;
}

const CONTENT_TYPES = {
  Youtube: "youtube",
  Twitter: "twitter",
} as const;
type ContentType = (typeof CONTENT_TYPES)[keyof typeof CONTENT_TYPES];

function normalizeType(type: UpdateContentModelProps["initialType"]): ContentType {
  return type === CONTENT_TYPES.Youtube ? CONTENT_TYPES.Youtube : CONTENT_TYPES.Twitter;
}

export function UpdateContentModel({
  contentId,
  initialTitle,
  initialLink,
  initialType,
  onContentUpdated,
}: UpdateContentModelProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [link, setLink] = useState(initialLink);
  const [type, setType] = useState<ContentType>(normalizeType(initialType));

  useEffect(() => {
    if (!open) {
      return;
    }
    setTitle(initialTitle);
    setLink(initialLink);
    setType(normalizeType(initialType));
  }, [open, initialTitle, initialLink, initialType]);

  async function updateContent() {
    const token = localStorage.getItem("token");

    if (!contentId) {
      alert("Missing content id");
      return;
    }
    if (!token) {
      alert("Please sign in first");
      return;
    }
    if (!title.trim() || !link.trim()) {
      alert("Title and link are required");
      return;
    }

    try {
      await axios.put(
        `${BACKEND_URL}/api/v1/content/${contentId}`,
        {
          title: title.trim(),
          link: link.trim(),
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Content updated");
      onContentUpdated?.();
      setOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message =
          (error.response?.data as { message?: string } | undefined)?.message ||
          "Failed to update content";
        alert(status ? `${message} (status ${status})` : message);
        return;
      }
      alert("Failed to update content");
    }
  }

  return (
    <div>
      <Button
        variant="primary"
        size="md"
        title="Edit"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <div className="flex justify-end">
              <div onClick={() => setOpen(false)} className="cursor-pointer">
                <CrossIcon></CrossIcon>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center gap-2 m-4">
              <input
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="px-4 py-2 w-64 text-center border rounded m-2"
              />
              <input
                placeholder="Link"
                value={link}
                onChange={(event) => setLink(event.target.value)}
                className="px-4 py-2 w-64 text-center border rounded m-2"
              />
            </div>

            <div>
              <h1>Type </h1>
              <div className="flex gap-36 p-4">
                <Button
                  title="Youtube"
                  variant={type === CONTENT_TYPES.Youtube ? "primary" : "secondary"}
                  size="md"
                  onClick={() => {
                    setType(CONTENT_TYPES.Youtube);
                  }}
                ></Button>
                <Button
                  title="Twitter"
                  variant={type === CONTENT_TYPES.Twitter ? "primary" : "secondary"}
                  size="md"
                  onClick={() => {
                    setType(CONTENT_TYPES.Twitter);
                  }}
                ></Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={updateContent}
                variant="primary"
                title="Save"
                size="md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
