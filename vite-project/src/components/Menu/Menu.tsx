import { MenuSquare } from "lucide-react";

import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MenuSquare className="menu" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24 border-foreground">
        <Link to="/">
          <DropdownMenuItem>
            <span>Home</span>
          </DropdownMenuItem>
        </Link>
        <Link to="/projects">
          <DropdownMenuItem>
            <span>Projects</span>
          </DropdownMenuItem>
        </Link>
        <Link to="/about">
          <DropdownMenuItem>
            <span>About</span>
          </DropdownMenuItem>
        </Link>
        <Link to="/contact">
          <DropdownMenuItem>
            <span>Contact</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
