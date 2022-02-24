import type { VFC } from "react";
import { useState } from "react";

import timeAgo from "../lib/time-ago";

type Props = {
  id: number;
  url: string;
  user: string;
  date: number;
  comments: number[];
  commentsCount: number;
  score: number;
  title: string;
};

const Story: VFC<Props> = ({
  id,
  title,
  date,
  url,
  user,
  score,
  commentsCount,
}) => {
  const { host } = url ? new URL(url) : { host: "#" };
  const [voted, setVoted] = useState(false);

  return (
    <div className="my-[5px]">
      <div className="mb-[3px] text-[15px]">
        <span
          className={`cursor-pointer font-sans mr-[5px] ${
            voted ? "text-[#ffa52a]" : "text-[#ccc]"
          }`}
          onClick={() => setVoted(!voted)}
        >
          &#9650;
        </span>
        <a className="text-black visited:text-gray-400" href={url}>
          {title}
        </a>
        {url ? (
          <span className="inline-block ml-1 text-xs">
            <a
              className="text-gray-400 hover:underline"
              href={`http://${host}`}
            >
              {host.replace(/^www\./, "")}
            </a>
          </span>
        ) : null}
      </div>
      <div className="text-xs">
        {score} {plural(score, "point")} by{" "}
        <a className="text-gray-400 hover:underline" href={`/user?id=${user}`}>
          {user}
        </a>{" "}
        <a className="text-gray-400 hover:underline" href={`/item?id=${id}`}>
          {timeAgo(new Date(date))} ago
        </a>{" "}
        |{" "}
        <a className="text-gray-400 hover:underline" href={`/item?id=${id}`}>
          {commentsCount} {plural(commentsCount, "comment")}
        </a>
      </div>
    </div>
  );
};

const plural = (n: number, s: string): string =>
  s + (n === 0 || n > 1 ? "s" : "");

export default Story;
