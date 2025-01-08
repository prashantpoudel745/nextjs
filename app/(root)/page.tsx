import React from "react";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

const Page = ({ searchParams }: { searchParams: { query?: string } }) => {
  const query = searchParams?.query; // Access the query parameter
  console.log("Query parameter:", query);

  const posts = [
    {
      title: "Startup 1",
      author: {
        id: 1,
        name: "Author 1",
      },
      description: "Description of Startup 1",
      image: "/image.jpeg",
      avatar : "/image.jpeg",
      category: "Tech",
      tags: ["Innovation", "Tech"],
      date: new Date().toISOString(),
    },
    {
      title: "Startup 2",
      author:  {
        id: 1,
        name: "Author 2",
      },
      description: "Description of Startup 2",
      image: "/image.jpeg",
      avatar : "/image.jpeg",
      category: "Health",
      tags: ["Health", "Wellness"],
      date: new Date().toISOString(),
    },
    // Add more startup objects as needed
  ];

  // Filter posts based on the query
  const filteredPosts = query
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    : posts;

  return (
    <>
      {/* Header Section */}
      <section className="my-8 mx-4 text-center flex flex-col gap-4 p-4 md:my-16 lg:mx-8 lg:mb-12">
        <h1 className="text-lg md:text-xl font-bold bg-yellow-300 w-full max-w-md mx-auto rounded-full p-3 text-black">
          Develop, Submit, Pitch, Launch
        </h1>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold p-3">
          <span>Pitch Your Startup,</span>
          <br />
          <span>Connect with Entrepreneurs</span>
        </h1>
        <div>
          <h1 className="text-base md:text-lg lg:text-xl font-bold text-red-500 capitalize">
            Develop your ideas, Submit to us, pitch your vision, and launch it
          </h1>
        </div>
        <SearchForm query={query} />
      </section>

      {/* Posts Section */}
      <section className="section-container bg-white min-h-screen py-8 lg:py-12">
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-black px-4 lg:px-10 text-center lg:text-left">
          {query ? `Search Results for "${query}"` : `All Startups`}
        </div>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 lg:px-10">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <li className="text-black" key={index}>
                <StartupCard post={post} />
              </li>
            ))
          ) : (
            <p className="text-center text-black col-span-full">
              No posts available.
            </p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Page;
