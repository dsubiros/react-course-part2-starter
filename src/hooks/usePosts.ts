import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostQuery {
  // page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) =>
  // useQuery<Post[], Error>({
  useInfiniteQuery<Post[], Error>({
    // queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryKey: ["posts", query],

    // queryFn: () => // Use this with Finite Queries
    // Here pageParam should be used when using InfiniteQuery
    queryFn: ({ pageParam }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            // Use when working with Finite Queries
            // _start: (query.page - 1) * query.pageSize,
            // Use this one when working with InfiniteQuery
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default usePosts;
