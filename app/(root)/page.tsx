import React from "react";
import SearchForm from "../../components/SearchForm";

const Page = ({ searchParams }: { searchParams: { query?: string } }) => {
  const query = searchParams?.query; // Access the query parameter
  console.log("Query parameter:", query);

  return (
    <>
      <section className="my-20 mx-2 text-center flex flex-col gap-2 p-5">
        <h1 className="text-xl font-bold bg-yellow-300 w-1/2 mx-auto rounded-full p-2 text-black">
          Develop, Submit, Pitch, Launch
        </h1>
        <h1 className="heading p-3 gap-2">
          <span>Pitch Your Startup,</span>
          <br />
          <span>Connect with Entrepreneurs</span>
        </h1>
        <div>
          <h1 className="text-xl font-bold text-red-500 capitalize">
            Develop your ideas, Submit to us, pitch your vision, and launch it
          </h1>
        </div>
        <SearchForm query={query} />
      </section>
      <section className="section-container">
        <p className="text-30 font-semibold text-white text-center">
          {query ? `Search Results for ${query}` : `All Startups`}
        </p>
      </section>
    </>
  );
};

export default Page;
