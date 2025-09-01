import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [selectedCategory, setSelectedCategory] = useState("Highlight");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //axios
  const fetchPosts = async () => {

    let newCatgeory = selectedCategory;
    if (selectedCategory === "Highlight") {
      newCatgeory = "";
    }
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts?category=${newCatgeory}`
      );
      console.log(response.data.posts);
      setFilteredPosts(response.data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }

  };

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory]);

  return (
    <>
      <div className="bg-[#F9F8F6] ">
        <div className="flex flex-col max-w-sm md:max-w-[1200px] mx-auto ">
          <div className="p-4 ">
            <p>Latest Articles</p>
          </div>
        </div>
      </div>
      <div className="bg-[#EFEEEB]">
        <div className="p-4 gap-4 flex justify-between items-start  flex-col md:flex-row max-w-sm md:max-w-[1200px] mx-auto ">
          <div className="hidden md:flex gap-6">
            {categories.map((category) => (
              <Button
                className="bg-white text-brown-600"
                key={category}
                value={category}
                onClick={handleCategoryChange}
              >
                {category}
              </Button>
            ))}
          </div>
          <Input
            type="text"
            placeholder="Search"
            className="bg-white md:w-[360px]"
          />
          <p className="md:hidden">Search</p>

          <div className="md:hidden w-full">
            <Select onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-sm md:max-w-[1200px] mx-auto px-4">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              description={post.description}
              author={post.author}
              date={new Date(post.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
              likes={post.likes}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}
