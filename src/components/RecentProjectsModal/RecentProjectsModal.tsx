import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Strings from "@/locales/en.json";
import { Figma, FolderOpen } from "lucide-react";
import getTogether from "@/assets/getTogether.png";
import { Badge } from "../ui/badge";
import { Project, LinkType } from "@/types";

interface RecentProjectProps {
  project: Project;
}

const mockProject = {
  imgSRC: getTogether,
  title: "GetTogether",
  labels: ["Figma", "UI/UX"],
  description:
    "A user experience research project to develop a solution for university students struggling to find social connections during the school year. Includes field studies, analysis, storyboards, low and high fidelity prototypes, and user testing.",
  link: "https://www.figma.com/proto/2Vl6FshnkU3qlTmsfMwS42/Prototype?node-id=322-4973&scaling=scale-down&page-id=322%3A4972&starting-point-node-id=322%3A4973&hide-ui=1",
  linkType: LinkType.Figma,
};

function RecentProjectRow({ project }: RecentProjectProps) {
  return (
    <div className="flex flex-row gap-x-8">
      <img
        src={project.imgSRC}
        alt={project.title}
        className="rounded-md border border-foreground"
      />
      <div className="flex flex-col gap-y-2 my-2 w-96">
        <h3>{project.title}</h3>
        <div className="flex flex-row gap-x-1">
          {project.labels.map((label, i) => (
            <Badge key={i}>{label}</Badge>
          ))}
        </div>
        <p>{project.description}</p>
        <a href={project.link} target="_blank">
          <Button variant={"outline"} size={"sm"}>
            <Figma className="mr-2 h-4 w-4" /> Link to {project.linkType}
          </Button>
        </a>
      </div>
    </div>
  );
}

export function RecentProjectsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <FolderOpen className="mr-2 h-4 w-4" />{" "}
          {Strings.Projects.recentProjectsButton}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-3/4 h-3/4">
        <DialogHeader>
          <DialogTitle>{Strings.Projects.recentProjectsButton}</DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto flex flex-col items-center gap-y-12 p-8">
          <RecentProjectRow project={mockProject} />
          <RecentProjectRow project={mockProject} />
          <RecentProjectRow project={mockProject} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
