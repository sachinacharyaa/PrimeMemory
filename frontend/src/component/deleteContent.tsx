import axios from "axios";
import { BACKEND_URL } from "../config";
import { Button } from "./ui/Button";

interface DeleteContentProps {
  contentId: string;
  onContentDelete?: () => void;
}

export function DeleteContentModel({
  contentId,
  onContentDelete,
}: DeleteContentProps) {
  async function deleteContent() {
    const token = localStorage.getItem("token");

    if (!contentId) {
      alert("Missing content id");
      return;
    }
    if (!token) {
      alert("Please sign in first");
      return;
    }

    try {
      await axios.delete(`${BACKEND_URL}/api/v1/content/${contentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Content deleted");
      onContentDelete?.();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message =
          (error.response?.data as { message?: string } | undefined)?.message ||
          "Failed to delete content";
        alert(status ? `${message} (status ${status})` : message);
        return;
      }
      alert("Failed to delete content");
    }
  }

  return (
    <Button
      variant="primary"
      size="md"
      title="Delete"
      onClick={deleteContent}
    />
  );
}
