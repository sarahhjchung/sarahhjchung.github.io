import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";
import logoSVG from "@/assets/logo.svg";

export function Logo() {
  return (
    <Link to="/">
      <Button size="icon" variant={"icon"}>
        <img src={logoSVG} alt="Logo" className="logo" />
      </Button>
    </Link>
  );
}
