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

export function ArticleSection() {
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
            <Button>Highlight</Button>
            <Button>Cat</Button>
            <Button>Inspiration</Button>
            <Button>General</Button>
          </div>
          <Input type="text" placeholder="Search" className="bg-white md:w-[360px]" />
          <p className="md:hidden">Search</p>

          <div className="md:hidden w-full">
            <Select>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Highlight" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Highlight">Highlight</SelectItem>
                <SelectItem value="Cat">Cat</SelectItem>
                <SelectItem value="Inspiration">Inspiration</SelectItem>
                <SelectItem value="General">General</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-sm md:max-w-[1200px] mx-auto px-4" >
        {blogPosts.map((post) => (
          <BlogCard 
            key={post.id} 
            image={post.image}
            category={post.category}
            title={post.title}
            description={post.description}
            author={post.author}
            date={post.date}
            likes={post.likes}
            content={post.content}
          />
        ))}
        </div>

      </div>

    </>
  );
}
