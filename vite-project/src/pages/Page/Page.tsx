import React from "react";
import { Outlet } from "react-router-dom";

export function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="container max-w-screen-xl flex-1 overflow-y-auto scrollbar-hide w-screen m-auto px-8 md:px-28">
        <Outlet /> {/* Renders child routes */}
      </div>
    </div>
  );
}
