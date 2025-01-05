"use client";

import React, { useState, useEffect } from "react";
import Searchbar from "../../components/Searchbar";
import Image from "next/image";

const Page = () => {
  const [isClient, setIsClient] = useState(false); // Client-side rendering flag

  // Function to format the date
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Function to format the time
  const formattime = (timestamp: number) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const startups = [
    {
      Date: formatDate(Date.now()),
      Datetime: formattime(Date.now()),
      title: "Startup 1",
      author: "author",
      description: "description",
      image: "/image.jpeg", // Use the correct image source
    },
    {
      Date: formatDate(Date.now()),
      Datetime: formattime(Date.now()),
      title: "Startup 2",
      author: "author",
      description: "description",
      image: "/image.jpeg", // Use the correct image source
    },
    {
      Date: formatDate(Date.now()),
      Datetime: formattime(Date.now()),
      title: "Startup 3",
      author: "author",
      description: "description",
      image: "/image.jpeg", // Use the correct image source
    },
    {
      Date: formatDate(Date.now()),
      Datetime: formattime(Date.now()),
      title: "Startup 4",
      author: "author",
      description: "description",
      image: "/image.jpeg", // Use the correct image source
    },
    {
      Date: formatDate(Date.now()),
      Datetime: formattime(Date.now()),
      title: "Startup 5",
      author: "author",
      description: "description",
      image: "/image.jpeg", // Use the correct image source
    },
    {
      Date: formatDate(Date.now()),
      Datetime: formattime(Date.now()),
      title: "Startup 6",
      author: "author",
      description: "description",
      image: "/image.jpeg", // Use the correct image source
    },
    {
      Date: formatDate(Date.now()),
      Datetime: formattime(Date.now()),
      title: "Startup 7",
      author: "author",
      description: "description",
      image: "/image.jpeg", // Use the correct image source
    },
    {
      Date: formatDate(Date.now()),
      Datetime: formattime(Date.now()),
      title: "Startup 8",
      author: "author",
      description: "description",
      image: "/image.jpeg", // Use the correct image source
    },
    {
      Date: formatDate(Date.now()),
      Datetime: formattime(Date.now()),
      title: "Startup 9",
      author: "author",
      description: "description",
      image: "/image.jpeg", // Use the correct image source
    },
  ];

  useEffect(() => {
    // Set to true once client-side render happens
    setIsClient(true);
  }, []);

  const [query, setQuery] = useState<string | undefined>("");
  const [filteredStartups, setFilteredStartups] = useState(startups);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    const filtered = startups.filter(
      (startup) =>
        startup.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStartups(filtered);
  };

  // If no search query, show all startups
  const startupsToShow = query ? filteredStartups : startups;

  return (
    <div className="my-20 mx-2 text-center flex flex-col gap-2 p-5">
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
      <Searchbar query={query} onSearch={handleSearch} />
      <div>
        <div className="flex flex-row md:flex-row flex-wrap justify-center gap-10 bg-white text-black py-10 ">
          <h1 className="text-2xl font-bold underline">Startups</h1>
        </div>
        <div className="flex flex-row md:flex-row flex-wrap justify-center gap-10 bg-white text-black p-5">
          {startupsToShow.length > 0 ? (
            startupsToShow.map((item, index) => (
              <div
                key={index}
                className="border-2 border-black rounded-2xl p-10 py-5 mt-5"
              >
                <div className="component flex flex-col flex-1 mb-5">
                  <div className="flex justify-between mb-5">
                    <h1 className="date text-sm font-extrabold text-start">
                      {item.Date}
                    </h1>
                    <h1 className="date text-sm font-extrabold text-start">
                      {item.Datetime}
                    </h1>
                  </div>
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <h1 className="text-md font-bold">{item.author}</h1>
                  <h1 className="text-sm mb-2">{item.description}</h1>
                  <div className="rounded-md">
                    <Image
                      src={item.image}
                      width={150}
                      height={150}
                      alt={item.title}
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-2 gap-5 items-center">
                  <span className="font-bold text-sm">Project</span>
                  <span className="font-bold text-sm bg-black text-white py-2 px-4 rounded-full">
                    Details
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No results found for "{query}".</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
