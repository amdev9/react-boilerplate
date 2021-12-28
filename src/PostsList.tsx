import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";

import { getPosts, createPost } from "./redux/posts/reducer";
import { PostsState } from "./redux/posts/reducer";
import { AppDispatch } from "./redux/store";
import ListItem from './ListItem'

type PropsFromRedux = ConnectedProps<typeof connector>;
type StateProps = ReturnType<typeof mapState>;
type Props = StateProps & PropsFromRedux;
interface RootState {
  posts: PostsState;
}

const PostsList = (props: Props) => {
  const dispatch = useDispatch();

  const { itemsPosts, status, actionCreated } = props;
  const [elementName, setElementName] = useState("");

  const fetchDataPosts = async () => {
    dispatch(getPosts());
  };

  useEffect(() => {
    fetchDataPosts();
  }, []);

  return (
    <div>
      <p>{status}</p>
      <input
        type="text"
        value={elementName}
        placeholder="Element name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setElementName(e.target.value)}
      />
      <button onClick={() => fetchDataPosts()}> fetch </button>
      <button
        onClick={() => {
          if (elementName !== "") {
            setElementName("");
            dispatch(createPost(elementName));
          }
        }}
      >
        add to localstorage
      </button>
      <div>
        <span>{itemsPosts && itemsPosts[0].title}</span>
      </div>
      <h3>LIST OF Element Added</h3>
      {actionCreated &&
        actionCreated.map((data, index) => <ListItem key={index} data={data} />)}
    </div>
  );
};

const mapState = (state: RootState) => ({
  status: state.posts.status,
  itemsPosts: state.posts.items,
  actionCreated: state.posts.newAction,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {};
};

const connector = connect(mapState, mapDispatchToProps);

export default connector(PostsList);
