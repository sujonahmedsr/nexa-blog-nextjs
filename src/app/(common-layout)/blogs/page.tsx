"use client"
import BlogCard from "@/components/ui/BlogCard";
import Spinner from "@/components/ui/Spinner";
import { useGetBlogsQuery } from "@/redux/apis/blogs.slice";
import { Blog } from "@/types";
import Link from "next/link";


const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();

  const { data: blogs, isLoading } = useGetBlogsQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl my-5 font-bold">
          Explore All <span className="text-teal-600">Blogs</span>
        </h1>
        <Link
          href="/blogs/create"
          className="px-4 py-2 bg-gray-100 border rounded text-teal-600"
        >
          Post Blog
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-6 my-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;