// for Add content

import { useState } from "react";

export function CreateContentModel({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-red-200 fixed top-0 left-0 opacity-60"></div>
      )}
    </div>
  );
}

//if open, we will render another ui on top of existing ui
