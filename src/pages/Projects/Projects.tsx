import Strings from "@/locales/en.json";
import laptopSVG from "@/assets/laptop.svg";
import { Button } from "@/components/ui/button";
import { FolderClosed, FolderOpen } from "lucide-react";

export function Projects() {
  return (
    <div className="container h-full flex flex-col gap-y-12 items-center justify-center">
      <div className="flex flex-col gap-y-6 md:gap-y-16 items-center justify-center md:w-5/6 mb-10">
        <img src={laptopSVG} alt="Laptop" className="absolute bottom-0 h-5/6" />
        <h1>{Strings.Projects.title}</h1>
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8 md:gap-x-24">
            <Button>
              <FolderOpen className="mr-2 h-4 w-4" />{" "}
              {Strings.Projects.recentProjectsButton}
            </Button>
            <Button>
              <FolderClosed className="mr-2 h-4 w-4" />{" "}
              {Strings.Projects.olderProjectsButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
