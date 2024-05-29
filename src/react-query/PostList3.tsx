// Using Infinite Queries
import React, { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList3 = () => {
  const pageSize = 5;
  // Use only with Finite Queries
  // const [page, setPage] = useState(1);

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (isLoading) return <p>Loading posts. Please wait...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, idx) => (
          <React.Fragment key={idx}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}

        {/* Use with Finite Queries */}
        {/* {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))} */}
      </ul>

      {/* <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="btn btn-primary my-3"
      >
        Previous
      </button> */}
      <button
        // Use with Finite Queries
        // onClick={() => setPage(page + 1)}
        // Use with InfiniteQuery
        onClick={() => fetchNextPage()}
        // disabled={page === 1}
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3 ms-1"
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList3;
