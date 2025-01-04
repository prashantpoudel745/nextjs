"use client"; // Ensure the component is a Client Component for interactivity

import React from "react";
import { signOut, signIn, useSession } from "next-auth/react"; // Assuming you are using next-auth for authentication
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // Fetch session from next-auth on the client side using the useSession hook
  const { data: session, status } = useSession();

  // If the session is loading, we can show a loading indicator
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  {
    console.log(session?.user?.image);
  }
  return (
    <div className="px-20 py-5 bg-white shadow-md text-black">
      <nav className="flex justify-between">
        <div>
          <Image src="/logo.jpg" alt="logo" width={50} height={30} />
        </div>

        {/* If the user is authenticated, show their info and the LogOut button */}
        {session?.user ? (
          <div className="flex items-center gap-3">
            <Link href={`/user/${session?.user?.id}`}>
              <span>{session?.user?.name}</span>
            </Link>
            <span>
              <Image
                src={`${session?.user?.image || "default-avatar.jpg"}`}
                alt="user"
                width={30}
                height={30}
              />
            </span>
            <span>
              <Link href="/startup/create">Create</Link>
            </span>
            <button
              onClick={async () => {
                await signOut();
              }}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              LogOut
            </button>
          </div>
        ) : (
          // If no session, show GitHub login button
          <button
            onClick={async () => await signIn("github")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Login with GitHub
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
