import { useCallback, useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent() {
  const [contents, setContents] = useState([]);

  const refresh = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setContents([]);
      return;
    }

    const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setContents(response.data.content || []);
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { contents, refresh };
}
