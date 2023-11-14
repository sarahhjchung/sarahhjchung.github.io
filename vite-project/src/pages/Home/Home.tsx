import React from "react";

import Strings from "@/locales/en.json";
import logoSVG from "@/assets/logo.svg";
import deskSVG from "@/assets/desk.svg";
import { Menu } from "@/components/Menu";

export function Home() {
  return (
    <div className="container py-12 flex flex-col gap-y-12 items-center justify-center">
      <div className="flex flex-row w-full justify-between">
        <img src={logoSVG} alt="Logo" className="logo" />
        <Menu />
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
