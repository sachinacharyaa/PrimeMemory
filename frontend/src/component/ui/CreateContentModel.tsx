// for Add content

import { CrossIcon } from "../../Icon/crossIcon";
import { Button } from "./Button";
import { Input } from "../Input";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../../config";
import axios from "axios";

interface CreateContentModelProps {
  open: boolean;
  onClose?: () => void;
  onContentAdded?: () => void;
}

// define once to avoid typos in string literals
const CONTENT_TYPES = {
  Youtube: "youtube",
  Twitter: "twitter",
} as const;
type ContentType = (typeof CONTENT_TYPES)[keyof typeof CONTENT_TYPES];

export function CreateContentModel({
  open,
  onClose,
  onContentAdded,
}: CreateContentModelProps) {
  const TitleRef = useRef<HTMLInputElement | null>(null);
  const LinkRef = useRef<HTMLInputElement | null>(null);
  const [type, setType] = useState<ContentType>(CONTENT_TYPES.Youtube);

  async function addContent() {
    const title = TitleRef.current?.value;
    const link = LinkRef.current?.value;
    const token = localStorage.getItem("token");

    if (!title || !link) {
      alert("Title and link are required");
      return;
    }
    if (!token) {
      alert("Please sign in first");
      return;
    }

    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          link,
          title,
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Content added");
      onContentAdded?.();
      onClose?.();
    } catch (error) {
      alert("Failed to add content");
    }
  }
  return (
    <div>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <div className="flex justify-end">
              <div onClick={onClose} className="cursor-pointer">
                <CrossIcon></CrossIcon>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center gap-2 m-4">
              <Input ref={TitleRef} placeholder={"Title"}></Input>
              <Input ref={LinkRef} placeholder={"Link"}></Input>
            </div>

            <div>
              <h1>Type </h1>
              <div className="flex gap-36 p-4">
                <Button
                  title="Youtube"
                  variant={
                    type === CONTENT_TYPES.Youtube ? "primary" : "secondary"
                  }
                  size="md"
                  onClick={() => {
                    setType(CONTENT_TYPES.Youtube);
                  }}
                ></Button>
                <Button
                  title="Twitter"
                  variant={
                    type === CONTENT_TYPES.Twitter ? "primary" : "secondary"
                  }
                  size="md"
                  onClick={() => {
                    setType(CONTENT_TYPES.Twitter);
                  }}
                ></Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={addContent}
                variant="primary"
                title="Submit"
                size="md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

//if open, we will render another ui on top of existing ui
