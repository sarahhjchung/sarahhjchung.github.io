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
import spirit from "@/assets/spirit.png";
import lofi from "@/assets/lofi.png";
import conference from "@/assets/conference.png";
import sql from "@/assets/sql.png";

interface OlderProjectProps {
  project: Project;
}

const dbProject = {
  imgSRC: sql,
  title: "Video Game Sales in SQL",
  labels: ["PostgreSQL"],
  description:
    "I completed a research project on video game sales to \
    learn how to create a good schema from an online dataset, \
    complete a thorough data cleaning process, analyze \
    data using SQL queries, and develop meaningful \
    conclusions using the query results.",
  links: ["https://github.com/sarahhjchung/video-game-sales-sql"],
  linkTypes: [LinkType.Github],
};
const lifeOSProject = {
  imgSRC: lifeOS,
  title: "LifeOS",
  labels: ["MithrilJS", "HTML", "CSS"],
  description:
    "This is a project for nwHacks, the very first hackathon I \
    participated in. My group and I developed a productivity \
    chrome extension with a timer feature and a background \
    noise player to allow students to study in peace.",
  links: ["https://devpost.com/software/lifeos"],
  linkTypes: [LinkType.Website],
};
const spiritProject = {
  imgSRC: spirit,
  title: "Spirit",
  labels: ["Design", "Webflow"],
  description:
    "This is a web issue for Hart House DEMO that I contributed \
    to as one of the web developers. This experience kindled a \
    passion for creating aesthetic websites for various school \
    clubs and communities. Following this experience, I continued \
    to volunteer as a web developer for clubs I was interested in: \
    UofT Badminton Club and UofT Cast Iron Cooking Club.",
  links: ["https://www.demomagazine.ca/spirit"],
  linkTypes: [LinkType.Website],
};
const lofiProject = {
  imgSRC: lofi,
  title: "Lofi Adventures",
  labels: ["Python", "Video Game Design"],
  description:
    "This is my very first coding project, where I worked with a \
    partner to create a platform video game using Python. During \
    this project, I was able to experiment with creating original \
    artwork, music, and assets for the video game.",
  links: ["https://github.com/sarahhjchung/lofi-adventures"],
  linkTypes: [LinkType.Github],
};
const conferenceProject = {
  imgSRC: conference,
  title: "Conference Planner",
  labels: ["Java"],
  description:
    "I worked with a large group of students to design and develop \
    an app to help organize and manage conferences. In \
    this project, we applied our knowledge on design patterns and \
    good programming practices that we learned in a software design \
    course.",
  links: ["https://github.com/sarahhjchung/conference-planning-app"],
  linkTypes: [LinkType.Github],
};

function OlderProjectRow({ project }: OlderProjectProps) {
  return (
    <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-8 justify-center items-center">
      <img
        src={project.imgSRC}
        alt={project.title}
        className="rounded-sm shadow-md md:w-40 w-24"
      />
      <div className="flex flex-col justify-center items-center md:justify-normal md:items-start gap-y-2 md:gap-y-4">
        <h3 className="text-center md:text-left">{project.title}</h3>
        <div className="flex flex-row gap-x-1">
          {project.labels.map((label, i) => (
            <Badge className="text-center" key={i}>
              {label}
            </Badge>
          ))}
        </div>
        <p className="text-xs text-center md:text-left">
          {project.description}
        </p>
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
        <div className="overflow-y-auto flex flex-col items-center gap-y-12 w-2/3 py-8 mx-auto scrollbar-hide">
          <OlderProjectRow project={dbProject} />
          <OlderProjectRow project={spiritProject} />
          <OlderProjectRow project={lifeOSProject} />
          <OlderProjectRow project={lofiProject} />
          <OlderProjectRow project={conferenceProject} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
