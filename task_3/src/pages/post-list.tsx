import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/redux/post/slice";

import type { RootState, AppDispatch } from "@/redux/store";

const PostLists = () => {
  const dispatch = useDispatch<AppDispatch>();

  const a = 123;

  const { items, status } = useSelector((state: RootState) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading posts</p>;
  return (
    <ul>
      {items.slice(0, 10).map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostLists;
