import React, { useEffect } from "react";
import { useState } from "react";
import Posts from "./Posts";
import Button from "react-bootstrap/Button";
import BlogPost from "./BlogPost";

const Blog = ({ isLoggedIn }) => {
  const [showAddPost, setShowAddPost] = useState(false);
  const [showAddPostButton, setShowAddPostButton] = useState(
    isLoggedIn ? true : false
  );
  const [posts, setPosts] = useState([]);
  const displayAddPostButton = () => {
    setShowAddPostButton(true);
    setShowAddPost(false);
  };
  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
    };

    getPosts();
  }, []);

  // Fetch Posts
  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();

    return data;
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setPosts([...posts, data]);
  };

  return (
    <div>
      {showAddPostButton && (
        <div className="d-grid gap-2">
          <Button
            onClick={() => {
              setShowAddPost(!showAddPost);
              setShowAddPostButton(!showAddPostButton);
            }}
            className="shadow-none"
            variant="primary"
            size="lg"
            style={{
              background: "orangered",
              border: "none",
              fontWeight: "400",
              marginTop: "6.3rem",
            }}
          >
            Add Post
          </Button>
        </div>
      )}
      {showAddPost && (
        <BlogPost onCancelOrPost={displayAddPostButton} onAdd={addTask} />
      )}
      <div
        style={
          isLoggedIn
            ? { paddingBottom: "10rem" }
            : { paddingBottom: "10rem", paddingTop: "6rem" }
        }
      >
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Blog;
