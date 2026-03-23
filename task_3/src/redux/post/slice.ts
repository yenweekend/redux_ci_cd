import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { type Post, type PostRequest } from "@/types/post";

interface PostsState {
  items: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: PostsState = {
  items: [],
  status: "idle",
};

export const fetchPosts = createAsyncThunk<Post[]>(
  "posts/fetchPosts",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to get list of post");
    }

    const data: Post[] = await res.json();
    return data;
  },
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostRequest>) => {
      state.items.unshift({ ...action.payload, id: Date.now(), userId: 1 });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
