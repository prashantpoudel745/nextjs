"use client"; // Ensure the component is a Client Component for interactivity

import React from "react";
import { signOut, signIn, useSession } from "next-auth/react"; // Assuming you are using next-auth for authentication
import Link from "next/link";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";

const Navbar = () => {
  const { data: session, status } = useSession();

  // If the session is loading, show a loading indicator
  if (status === "loading") {
    return (
      <div className="text-center flex justify-center items-center h-16">
        Loading...
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 py-3 bg-white shadow-md text-black">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={40}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          {session?.user ? (
            <div className="flex items-center gap-3">
              {/* Create Link */}
              <Link
                href="/startup/create"
                className="hidden sm:block font-semibold hover:text-blue-500"
              >
                Create
              </Link>

              {/* User Info */}
              <Link
                href={`/user/${session?.user?.id}`}
                className="hidden sm:block font-bold hover:text-blue-500"
              >
                {session?.user?.name}
              </Link>

              {/* User Avatar */}
              <Image
                src={session?.user?.image || "default-avatar.jpg"}
                alt="user"
                width={30}
                height={30}
                className="rounded-full"
              />

              {/* Logout Button */}
              <button
                onClick={async () => {
                  await signOut();
                }}
                className="bg-red-500 text-white px-3 py-1 rounded font-semibold hover:bg-red-600"
              >
                LogOut
              </button>
            </div>
          ) : (
            // Login Button
            <button
              onClick={async () => await signIn("github")}
              className="flex items-center gap-2 bg-gray-100 text-black px-3 py-1 rounded text-sm md:text-base font-medium hover:bg-gray-200"
            >
              <FiGithub size={18} />
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
