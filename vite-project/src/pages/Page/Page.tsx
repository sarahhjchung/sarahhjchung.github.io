import React from "react";
import { Outlet } from "react-router-dom";

import { Menu } from "@/components/Menu";
import { Logo } from "@/components/Logo";

export function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="container mt-12 flex flex-row w-full justify-between">
        <Logo />
        <Menu />
      </div>
      <div className="container max-w-screen-xl flex-1 overflow-y-auto scrollbar-hide w-screen m-auto px-8 md:px-28">
        <Outlet /> {/* Renders child routes */}
      </div>
    </div>
  );
}
