import { useEffect } from "react";
import { ShareIcon } from "../../Icon/shareIcon";

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: () => void;
      };
    };
  }
}

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "x";
}
export function Card({ title, link, type }: CardProps) {
  const isTwitter = type === "twitter" || type === "x";
  const isYouTube = type === "youtube";

  useEffect(() => {
    if (!isTwitter) return;

    const existingScript = document.getElementById("twitter-wjs");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "twitter-wjs";
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => window.twttr?.widgets?.load();
      document.body.appendChild(script);
    } else {
      window.twttr?.widgets?.load();
    }
  }, [isTwitter]);

  const getYouTubeEmbedUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      const hostname = parsed.hostname.replace("www.", "");

      if (hostname === "youtu.be") {
        const id = parsed.pathname.replace("/", "");
        return id ? `https://www.youtube.com/embed/${id}` : url;
      }

      if (hostname === "youtube.com") {
        if (parsed.pathname === "/watch") {
          const id = parsed.searchParams.get("v");
          return id ? `https://www.youtube.com/embed/${id}` : url;
        }

        if (parsed.pathname.startsWith("/embed/")) {
          return url;
        }
      }
    } catch {
      return url;
    }

    return url;
  };

  const getTwitterEmbedUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname === "x.com") {
        parsed.hostname = "twitter.com";
      }
      return parsed.toString();
    } catch {
      return url;
    }
  };

  const twitterEmbedUrl = getTwitterEmbedUrl(link);

  return (
    <div>
      <div
        className="p-4 bg-white rounded-md shadow-md border-slate-300
        max-w-72 border minh-48 min-w-72"
      >
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="text-gray-500 pr-2">
              <ShareIcon size={"md"}></ShareIcon>
            </div>
            {title}
          </div>

          <div className="flex items-center">
            <div className="pr-2 text-gray-400">
              <a href={link} target="_blank">
                <ShareIcon size={"md"}></ShareIcon>
              </a>
            </div>

            <div className=" text-gray-400">
              <ShareIcon size={"md"}></ShareIcon>
            </div>
          </div>
        </div>

        <div className="pt-4">
          {isYouTube && (
            <iframe
              className="w-full"
              width="560"
              height="315"
              src={getYouTubeEmbedUrl(link)}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {isTwitter && (
            <blockquote className="twitter-tweet">
              <a href={twitterEmbedUrl}>View Tweet</a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
