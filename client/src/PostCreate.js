import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [title, setTitle] = useState("");
  const submitPost = async (e) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:4000/posts", {
      title,
    });
    setTitle("");
    window.location = "/";
  };
  return (
    <div>
      <form method="post" onSubmit={submitPost}>
        <div className="form-group">
          <label> Title </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary"> Submit </button>
      </form>
    </div>
  );
};
