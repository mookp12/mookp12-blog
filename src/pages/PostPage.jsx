import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const PostPage = () => {

  const { postId } = useParams();
  console.log(postId);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://blog-post-project-api.vercel.app/posts/${postId}`);
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      console.error('Error fetching post:', err);
      setError(err.message || 'Failed to fetch post');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPost();
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <section>
        <header>
          <h2>Error</h2>
        </header>
        <p>Failed to load post: {error}</p>
        <button onClick={fetchPost}>Try Again</button>
      </section>
    );
  }

  if (!data) {
    return <section>No post found</section>;
  }

  return (
    <main>
      <article>
        <header>
          <h1>{data.title}</h1>
          <p>By {data.author} | {data.date}</p>
          <p>Category: {data.category}</p>
        </header>
        
        {data.image && (
          <img src={data.image} alt={data.title || "Blog post image"} />
        )}
        
        <section>
          <p>{data.description}</p>
          <div>{data.content}</div>
        </section>
        
        <footer>
          <p>Likes: {data.likes}</p>
        </footer>
      </article>
    </main>
  )
}

export default PostPage