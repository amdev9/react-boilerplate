import React, { useState } from "react";
// import { connect } from "react-redux";

const PostsList = () => {
  const [elementName, setElementName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={elementName}
        placeholder="Element name"
        onChange={(e) => setElementName(e.target.value)}
      />
    </div>
  );
};

export default PostsList;
