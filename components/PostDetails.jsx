import PostTitle from "./PostTitle";
import PostInstructions from "./PostInstructions";
import PostImage from "./PostImage";

export default function PostDetails() {
  return (
    <div>
      <h2>Post Details</h2>
      <p>Here you can edit the details of your post.</p>
      <PostTitle />
      <PostInstructions />
      <PostImage />
    </div>
  );
}
