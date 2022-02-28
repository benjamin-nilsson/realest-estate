import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          text={post.text}
          src={post.src}
        />
      ))}
    </>
  );
};

export default Posts;
