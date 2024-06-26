// Using ReactQuery
import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList2 = () => {
  const pageSize = 5;
  const [page, setPage] = useState(1);

  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <p>Loading posts. Please wait...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>

      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="btn btn-primary my-3"
      >
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        // disabled={page === 1}
        className="btn btn-primary my-3 ms-1"
      >
        Next
      </button>
    </>
  );
};

export default PostList2;
