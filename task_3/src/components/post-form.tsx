import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "@/redux/post/slice";
import type { AppDispatch } from "@/redux/store";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim().length === 0 || body.trim().length === 0) {
      alert("Please enter title and body");
      return;
    }

    dispatch(
      addPost({
        title,
        body,
      }),
    );

    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter body"
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
