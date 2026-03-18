// for Add content

import { CrossIcon } from "../../Icon/crossIcon";
import { Button } from "./Button";

interface CreateContentModelProps {
  open: boolean;
  onClose?: () => void;
}

export function CreateContentModel({ open, onClose }: CreateContentModelProps) {
  return (
    <div>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <div className="flex justify-center">
              <div onClick={onClose} className="cursor-pointer">
                <CrossIcon></CrossIcon>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center gap-2 m-4">
              <Input placeholder={"Title"}></Input>
              <Input placeholder={"Link"}></Input>
            </div>
            <div className="flex justify-center">
              <Button variant="primary" title="Submit" size="md" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

function Input({ onChange, placeholder }: InputProps) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 w-64 text-center border rounded m-2"
        onChange={onChange}
      ></input>
    </div>
  );
}

//if open, we will render another ui on top of existing ui
