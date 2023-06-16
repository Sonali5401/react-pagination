import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";

export default function App() {
  const { posts, setPosts } = useState([]);
  const { loading, setLoading } = useState(true);
  //const { currentPage, setCurrentPage } = useState(1);
  //const { postPerPage, setPostPerPage } = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log("posts", posts);

  return (
    <div>
      <Posts posts={posts} loading={loading} />
    </div>
  );
}
