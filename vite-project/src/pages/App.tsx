import React from "react";

import Strings from "../locales/en.json";
import { Button } from "@/components/ui/button";

export function App() {
  return (
    <div className="container px-8 md:px-40 flex flex-col gap-y-8 items-center justify-center">
      <h1 className="text-5xl text-center">{Strings.Main.title}</h1>
      <h4 className="text-2xl text-center">
        I’m a <span className="font-bold">Computer Science Specialist</span>{" "}
        student at the <span className="font-bold">University of Toronto </span>
        . I’m striving to become a{" "}
        <span className="font-bold">creative developer and designer</span>.
      </h4>
      <Button>Click me</Button>
    </div>
  );
}
