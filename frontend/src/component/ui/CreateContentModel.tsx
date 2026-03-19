// for Add content

import { CrossIcon } from "../../Icon/crossIcon";
import { Button } from "./Button";
import { Input } from "../Input";
import { useRef, useState } from "react";

interface CreateContentModelProps {
  open: boolean;
  onClose?: () => void;
}

//define once and no scope of typo in type
enum ContenType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModel({ open, onClose }: CreateContentModelProps) {
  const TitleRef = useRef<HTMLInputElement | null>(null);
  const LinkRef = useRef<HTMLInputElement | null>(null);
  const [type, setType] = useState(ContenType.Youtube);

  function addContent() {
    const title = TitleRef.current?.value;
    const link = LinkRef.current?.value;
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
                    type === ContenType.Youtube ? "primary" : "secondary"
                  }
                  size="md"
                  onClick={() => {
                    setType(ContenType.Youtube);
                  }}
                ></Button>
                <Button
                  title="Twitter"
                  variant={
                    type === ContenType.Twitter ? "primary" : "secondary"
                  }
                  size="md"
                  onClick={() => {
                    setType(ContenType.Twitter);
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
