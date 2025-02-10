import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { Blog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexaBlog | Blogs Details",
};

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};



const BlogDetailsPage = async ({
    params,
  }: {
    params: Promise<{ blogId: string }>;
  }) => {
    const { blogId } = await params;
  
    const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
    const blog = await res.json();
  
    //   console.log(blog);
  
    return (
      <div className="my-10">
        <BlogDetailsCard blog={blog} />
      </div>
    );
  };
  
  export default BlogDetailsPage;