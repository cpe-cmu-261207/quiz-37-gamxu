import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  const filtered = comments.filter(x => x.likeNum > 0)
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        {/* PostOwner */}
      <PostOwner></PostOwner>

        {/* Comment*/}
        {
          filtered.map((x,i) => 
            <Comment 
            username={x.username} 
            userImagePath={x.userImagePath}
            commentText={x.commentText}
            likeNum={x.likeNum}
            replies={x.replies}
            />
            
          )
        }

      </div>
    </div>
  );
}
