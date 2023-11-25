import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Strings from "@/locales/en.json";
import { FolderClosed, Figma, Github, Laptop } from "lucide-react";
import { Badge } from "../ui/badge";
import { Project, LinkType } from "@/types";
import lifeOS from "@/assets/lifeos.png";

interface OlderProjectProps {
  project: Project;
}

const lifeOSProject = {
  imgSRC: lifeOS,
  title: "LifeOS",
  labels: ["MithrilJS", "HTML", "CSS"],
  description:
    "This is a project for the very first hackathon I participated in at nwHacks. My group and I developed a productivity chrome extension with a timer feature and productivity boosting background noise player to allow students to study in peace.",
  links: [
    "https://www.figma.com/proto/2Vl6FshnkU3qlTmsfMwS42/Prototype?node-id=322-4973&scaling=scale-down&page-id=322%3A4972&starting-point-node-id=322%3A4973&hide-ui=1",
  ],
  linkTypes: [LinkType.Github],
};

function OlderProjectCard({ project }: OlderProjectProps) {
  return (
    <div className="relative md:w-64 md:h-64 w-56 h-56 m-1 rounded-sm cursor-pointer border">
      <div className="border border-secondary-foreground rounded-sm p-2 md:w-64 md:h-64 w-56 h-56 absolute inset-0 flex flex-col gap-y-2 items-center justify-center z-10 hover:bg-secondary hover:opacity-100 text-secondary-foreground opacity-0">
        <h3>{project.title}</h3>
        <div className="flex flex-row gap-x-1">
          {project.labels.map((label, i) => (
            <Badge key={i}>{label}</Badge>
          ))}
        </div>
        <p className="text-xs text-center">{project.description}</p>
        <a href={project.links[0]} target="_blank">
          <Button
            className="bg-secondary hover:bg-accent hover:text-secondary"
            variant={"outline"}
            size={"sm"}
          >
            {project.linkTypes[0] === LinkType.Figma && (
              <Figma className="mr-2 h-4 w-4" />
            )}
            {project.linkTypes[0] === LinkType.Github && (
              <Github className="mr-2 h-4 w-4" />
            )}
            {project.linkTypes[0] === LinkType.Website && (
              <Laptop className="mr-2 h-4 w-4" />
            )}
            Link to {project.linkTypes[0]}
          </Button>
        </a>
      </div>
      <img
        src={project.imgSRC}
        alt={project.title}
        className="rounded-sm border border-foreground md:w-64 md:h-64 w-56 h-56 object-cover"
      />
    </div>
  );
}

function OlderProjectRow({ project }: OlderProjectProps) {
  return (
    <div className="flex flex-row gap-x-8 justify-center items-center">
      <img
        src={project.imgSRC}
        alt={project.title}
        className="rounded-sm border border-foreground object-cover"
      />
      <div className="flex flex-col gap-y-4">
        <h3 className="text-left">{project.title}</h3>
        <div className="flex flex-row gap-x-1">
          {project.labels.map((label, i) => (
            <Badge key={i}>{label}</Badge>
          ))}
        </div>
        <p className="text-xs">{project.description}</p>
        <a href={project.links[0]} target="_blank">
          <Button variant={"outline"} size={"sm"}>
            {project.linkTypes[0] === LinkType.Figma && (
              <Figma className="mr-2 h-4 w-4" />
            )}
            {project.linkTypes[0] === LinkType.Github && (
              <Github className="mr-2 h-4 w-4" />
            )}
            {project.linkTypes[0] === LinkType.Website && (
              <Laptop className="mr-2 h-4 w-4" />
            )}
            Link to {project.linkTypes[0]}
          </Button>
        </a>
      </div>
    </div>
  );
}

export function OlderProjectsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <FolderClosed className="mr-2 h-4 w-4" />{" "}
          {Strings.Projects.olderProjectsButton}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-3/4 h-3/4">
        <DialogHeader>
          <DialogTitle>{Strings.Projects.olderProjectsButton}</DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto flex flex-col items-center gap-y-12 px-16 scrollbar-hide">
          {/* <OlderProjectCard project={lifeOSProject} /> */}
          <OlderProjectRow project={lifeOSProject} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
