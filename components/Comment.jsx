import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  const filtered = props.replies.filter(x => x.likeNum > 0)
  return (
    <div>
        <div className="d-flex gap-2 my-2">
          <img
            src={`${props.userImagePath}`}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{props.username}</span>
            <br />
            <span>{props.commentText}</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}/>
              <span className="text-muted">{`${props.likeNum} คน`}</span>
            </div>
          </div>
        </div>

    {
      filtered.map((x,i) =>
        <Reply 
        username={x.username}
        userImagePath={x.userImagePath}
        replyText={x.replyText}
        likeNum={x.likeNum}
        key={i}
        />
      )

    }
    </div>
  );
}
