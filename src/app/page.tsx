import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import Banner from "@/components/shared/Banner/Banner";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  return (
    <>
    <Banner />
    <div className="my-10">
      <LatestBlogs blogs={blogs} />
    </div>
    </>
  );
};

export default HomePage;
