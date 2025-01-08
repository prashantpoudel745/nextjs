"use client";

import React from "react";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Startup {
  title: string;
  author: {
    id: number;
    name: string;
  };
  description: string;
  image: string;
  avatar: string;
  category: string;
  tags: string[];
  date: string;
}

const StartupCard = ({ post }: { post: Startup }) => {
  return (
    <div className="border border-gray-300 shadow-lg rounded-3xl p-4 sm:p-6 transition-transform transform hover:scale-105 bg-white">
      {/* Date and Views */}
      <div className="flex justify-between items-center mb-4 text-xs sm:text-sm text-gray-600">
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <span className="flex items-center gap-1">
          <FaEye /> 20
        </span>
      </div>

      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <Link
            href={`/startup/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <h2 className="text-base sm:text-lg font-bold mb-2 hover:text-blue-500">
              {post.title}
            </h2>
          </Link>
          <Link href={`/user/${post.author.id}`}>
            <p className="text-xs sm:text-sm text-gray-700 mb-4 hover:text-blue-500">
              <span className="font-semibold">Author </span>: {post.author.name}
            </p>
          </Link>
          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-700 mb-4">
            {post.description}
          </p>
        </div>
        <div>
          <Link href={`/user/${post.author.id}`}>
            <Image
              src={post.image}
              alt={post.title}
              width={40}
              height={50}
              className="object-contain w-full h-full rounded-full"
            />
          </Link>
        </div>
      </div>

      {/* Image */}
      <Link href={`/startup/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="w-full h-auto">
          <Image
            src={post.image}
            alt={post.title}
            width={300}
            height={200}
            className="rounded w-full object-cover"
          />
        </div>
      </Link>

      {/* Category and Tags */}
      <div className="mt-4">
        {/* Category */}
        <span className="text-xs sm:text-sm text-gray-600 font-medium block mb-2">
          Category: {post.category}
        </span>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 text-gray-600 rounded-full px-3 py-1"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupCard;
