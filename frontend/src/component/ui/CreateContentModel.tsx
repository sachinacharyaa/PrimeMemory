// for Add content

import { CrossIcon } from "../../Icon/crossIcon";
import { Button } from "./Button";
import { Input } from "../Input";
import { useReducer, useRef } from "react";

interface CreateContentModelProps {
  open: boolean;
  onClose?: () => void;
}

export function CreateContentModel({ open, onClose }: CreateContentModelProps) {
  const TitleRef = useRef<HTMLInputElement>();
  const LinkRef = useRef<HTMLInputElement>();
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
              <Input reference={TitleRef} placeholder={"Title"}></Input>
              <Input reference={LinkRef} placeholder={"Link"}></Input>
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
