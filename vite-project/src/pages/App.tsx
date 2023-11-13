import React from "react";

import Strings from "../locales/en.json";
import { MenuSquare } from "lucide-react";
import logoSVG from "@/assets/logo.svg";
import deskSVG from "@/assets/desk.svg";

export function App() {
  return (
    <div className="container py-12 md:px-40 flex flex-col gap-y-12 items-center justify-center">
      <div className="flex flex-row w-full justify-between">
        <img src={logoSVG} alt="Logo" className="logo" />
        <MenuSquare className="menu" />
      </div>
      <div className="flex flex-col gap-y-8 md:w-5/6">
        <h1>{Strings.Main.title}</h1>
        <h4 className="subtitle">
          I’m a <span className="font-bold">Computer Science Specialist</span>{" "}
          student at the{" "}
          <span className="font-bold">University of Toronto</span>. I’m striving
          to become a{" "}
          <span className="font-bold">creative developer and designer</span>.
        </h4>
      </div>

      <img src={deskSVG} alt="Desk Illustration" />
    </div>
  );
}
