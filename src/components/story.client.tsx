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
      <div className="title">
        <span
          className={`cursor-pointer font-sans mr-[5px] ${
            voted ? "text-[#ffa52a]" : "text-[#ccc]"
          }`}
          onClick={() => setVoted(!voted)}
        >
          &#9650;
        </span>
        <a href={url}>{title}</a>
        {url ? (
          <span className="source">
            <a href={`http://${host}`}>{host.replace(/^www\./, "")}</a>
          </span>
        ) : null}
      </div>
      <div className="meta">
        {score} {plural(score, "point")} by{" "}
        <a href={`/user?id=${user}`}>{user}</a>{" "}
        <a href={`/item?id=${id}`}>{timeAgo(new Date(date))} ago</a> |{" "}
        <a href={`/item?id=${id}`}>
          {commentsCount} {plural(commentsCount, "comment")}
        </a>
      </div>
    </div>
  );
};

const plural = (n: number, s: string): string =>
  s + (n === 0 || n > 1 ? "s" : "");

export default Story;
