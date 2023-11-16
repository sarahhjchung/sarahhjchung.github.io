import Strings from "@/locales/en.json";
import laptopSVG from "@/assets/laptop.svg";
import { RecentProjectsModal } from "@/components/RecentProjectsModal";
import { OlderProjectsModal } from "@/components/OlderProjectsModal";

export function Projects() {
  return (
    <div className="container h-full flex flex-col gap-y-12 items-center justify-center">
      <div className="flex flex-col sm:pb-36 gap-y-6 md:gap-y-16 items-center md:w-5/6">
        <img
          src={laptopSVG}
          alt="Laptop"
          className="absolute bottom-0 h-5/6 opacity-70"
        />
        <h1>{Strings.Projects.title}</h1>
        <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8 md:gap-x-24">
          <RecentProjectsModal />
          <OlderProjectsModal />
        </div>
      </div>
    </div>
  );
}
