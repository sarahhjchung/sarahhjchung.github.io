import { MenuSquare } from "lucide-react";

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
        <DropdownMenuItem>
          <span>Home</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Projects</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>About</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Contact</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
