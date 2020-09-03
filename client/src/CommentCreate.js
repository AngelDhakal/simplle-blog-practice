import React, { useState } from "react";
import axios from "axios";

export default ({ postId }) => {
  const [comment, setComment] = useState("");
  const sendComment = async (e) => {
    e.preventDefault();
    await axios.post(`http://127.0.0.1:4001/posts/${postId}/comments`, {
      content: comment,
    });
    console.log(comment);
    setComment("");
  };
  return (
    <div>
      <form method="post" onSubmit={sendComment}>
        <div className="form-group">
          <label>Comments</label>
          <br />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button className="btn btn-danger">Send</button>
      </form>
    </div>
  );
};
