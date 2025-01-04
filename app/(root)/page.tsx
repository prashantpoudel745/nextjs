import { SessionProvider } from "next-auth/react";
import React from "react";

const page = () => {
  return;
  <SessionProvider>
    <div className="text-center mt-10">Home Page</div>;
  </SessionProvider>;
};

export default page;
