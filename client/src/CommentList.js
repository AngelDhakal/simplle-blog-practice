import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ postId }) => {
  const [comments, SetComments] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `http://127.0.0.1:4001/posts/${postId}/comments`
    );

    SetComments(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
