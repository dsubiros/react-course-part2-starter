import axios from "axios";
import { useEffect, useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number | undefined>();
  const { data: posts, error, isLoading } = usePosts(userId);

  if (isLoading) return <p>Loading posts. Please wait...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <strong>userId: {userId}</strong> */}
      <select
        onChange={(evt) =>
          setUserId(evt.target.value ? +evt.target.value : undefined)
        }
        value={userId}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
