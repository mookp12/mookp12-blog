import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

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
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${postId}`
      );
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      console.error("Error fetching post:", err);
      setError(err.message || "Failed to fetch post");
    } finally {
      setLoading(false);
    }
  };

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
    <>
      <NavBar />
      <main className="bg-[#F9F8F6] px-4 md:px-6 py-10 md:py-15">
        <div className="max-w-[1200px] mx-auto">
          {data.image && (
            <div className="w-full mb-4">
              <img
                className="w-full aspect-video rounded-2xl object-cover"
                src={data.image}
                alt={data.title || "Blog post image"}
              />
            </div>
          )}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column with post content - 3/4 width */}
            <article className="flex-1 lg:w-3/4">
              <div className="flex flex-col gap-4">
                <header>
                  <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
                    {data.category}
                  </span>
                  <span>
                    {" "}
                    {new Date(data.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <h1 className="text-2xl font-bold font-weight-600 m-4">
                    {data.title}
                  </h1>
                </header>

                <section>
                  <p>{data.description}</p>
                  <div className="markdown">
                    <ReactMarkdown>{data.content}</ReactMarkdown>
                  </div>
                </section>

                <footer>
                  <p>Likes: {data.likes}</p>
                </footer>
              </div>
            </article>

            {/* Right column with author information - 1/4 width */}
            <aside className="lg:w-1/4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                    alt={data.author}
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {data.author}
                  </h3>
                  <p className="text-sm text-gray-600">Author</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PostPage;
