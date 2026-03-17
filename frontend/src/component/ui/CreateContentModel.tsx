// for Add content

import { useState } from "react";
import { CrossIcon } from "../../Icon/crossIcon";

export function CreateContentModel({ open, onClose }) {
  return (
    <div>
      {open && (
        <div
          className="w-screen h-screen bg-red-200 fixed top-0 left-0 opacity-60
        justify-center"
        >
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              {" "}
              <div className="flex justify-center">
                <CrossIcon></CrossIcon>
              </div>
              <div>{/* /// */}</div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

//if open, we will render another ui on top of existing ui
