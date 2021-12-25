import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostsState {
  status: string;
  items: Array<FetchedDataObj>;
  newAction: Array<string>;
}

export interface FetchedDataObj {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const initialState: PostsState = {
  status: "",
  items: [],
  newAction: ["test"],
};

export const counterSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => ({ ...state, status: "PENDING" }),
    createPost: (state, action: PayloadAction<string>) => {
      let finalAction = [];
      if (state.newAction !== undefined) {
        finalAction = [...state.newAction, action.payload];
      } else {
        finalAction = [action.payload];
      }
      return { ...state, newAction: finalAction };
    },
    getPostsError: (state, action: PayloadAction<Error>) => {
      return { ...state, status: action.payload.message };
    },
    getPostsStatus: (state, action: PayloadAction<Array<FetchedDataObj>>) => {
      console.log(action);
      const users = { ...action.payload };
      const items = users;

      return { ...state, status: "DONE", items };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getPosts, createPost, getPostsStatus, getPostsError } =
  counterSlice.actions;

export default counterSlice.reducer;
