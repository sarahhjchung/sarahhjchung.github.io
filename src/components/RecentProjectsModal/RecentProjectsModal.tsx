import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Strings from "@/locales/en.json";
import { Figma, FolderOpen, Github, Laptop } from "lucide-react";
import getTogether from "@/assets/getTogether.png";
import outhouse from "@/assets/outhouse.png";
import chattyjs from "@/assets/chattyjs.png";
import articulate from "@/assets/articulate.png";
import { Badge } from "../ui/badge";
import { Project, LinkType } from "@/types";

interface RecentProjectProps {
  project: Project;
}

const getTogetherProject = {
  imgSRC: getTogether,
  title: "GetTogether",
  labels: ["Figma", "UI/UX"],
  description:
    "In this project, I worked with a group of students to design \
    a mobile app to facilitate meaningful student connections. \
    Through a user-centric approach, I meticulously crafted various \
    field studies, storyboards, paper prototypes, and a high-fidelity \
    prototype on Figma. Through initial research, we discovered that \
    students want to easily participate in non-academic related events \
    to meet new people. For the final prototype, I spearheaded \
    intuitive interfaces and designed features allowing for easy \
    event creation and exploration on campus. Overall, this project \
    taught me the intracacies of UX research and prototyping, \
    and ignited my passion for user-friendly design and applications.",
  links: [
    "https://www.figma.com/proto/2Vl6FshnkU3qlTmsfMwS42/Prototype?node-id=322-4973&scaling=scale-down&page-id=322%3A4972&starting-point-node-id=322%3A4973&hide-ui=1",
  ],
  linkTypes: [LinkType.Figma],
};

const outhouseProject = {
  imgSRC: outhouse,
  title: "Outhouse",
  labels: ["React", "JavaScript", "Express"],
  description:
    "In this project, I worked with a small group of students to design \
    and develop a website to help students find the best washrooms on \
    campus; this idea came to me when I personally had troubles finding \
    a good washroom in the most desperate times. We used React \
    to develop various features allowing students to find washrooms near \
    them, view washroom reviews, leave reviews for washrooms, and receive \
    important announcements on washrooms (ie. a washroom being \
    closed for repairs). This end-to-end project taught me the skills \
    to set up a web application from the ground up and split up large tasks \
    to effeciently collaborate with other students.",
  links: ["https://github.com/sarahhjchung/outhouse"],
  linkTypes: [LinkType.Github],
};

const chattyjsProject = {
  imgSRC: chattyjs,
  title: "ChattyJS",
  labels: ["JavaScript", "Express"],
  description:
    "In this project, I learned to design, develop, and document a \
    JavaScript package. On top of this project being a great opportunity to \
    practice my front-end development skills with JavaScript, my biggest \
    takeaway was learning to write good documentation. \
    This included learning to write an API documentation detailing \
    important information about my functions, its parameters, and its \
    return values. Additionally, I learned to organize my files and \
    comments, apply good naming conventions, and writing clean code.",
  links: ["https://github.com/sarahhjchung/chattyjs"],
  linkTypes: [LinkType.Github],
};

const articulateProject = {
  imgSRC: articulate,
  title: "Articulat3",
  labels: ["React", "TypeScript", "Tailwind"],
  description:
    "In this project, I worked as a designer, project manager, and a \
    frontend developer as part of a team to create a web application \
    with end-to-end features offering easy 3D object creation useful for \
    designers, game developers, and content creators. I designed the \
    prototype on Figma and made iterative change to them while \
    receiving consistent feedback. Then using React, Tailwind, and \
    shadcn/ui components, we set up the client side of the web \
    application and developed responsive, user-friendly features. \
    This project allowed me to dip my toes in various roles required \
    for building an application; it added perspective when coding and \
    helped me maintain a user-focused approach in all steps of the project. \
    Additionally, I gained organizational experience from having to facilitate \
    good communication between all members of the team to ensure we are on \
    track for completing our deliverables.",
  links: [
    "https://github.com/sarahhjchung/articulate",
    "https://www.figma.com/file/PiuZtndJxjyLuyAER2jeSh/Articulate?type=design&node-id=0-1&mode=design&t=fuTBVtd6aK1Td4PR-0",
  ],
  linkTypes: [LinkType.Github, LinkType.Figma],
};

function RecentProjectRow({ project }: RecentProjectProps) {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center">
      <div className="flex flex-col gap-y-4 items-center w-4/5">
        <div className="flex md:flex-row flex-col justify-between items-center w-full sticky top-1">
          <h3 className="backdrop-blur-sm py-2 px-4 rounded-md bg-background/30">
            {project.title}
          </h3>
          <div className="hidden md:block flex flex-row gap-x-1 backdrop-blur-sm py-2 px-4 rounded-md bg-background/30">
            {project.labels.map((label, i) => (
              <Badge key={i}>{label}</Badge>
            ))}
          </div>
        </div>
        <img
          src={project.imgSRC}
          alt={project.title}
          className="rounded-sm shadow-md w-2/3"
        />
        <p className="text-center">{project.description}</p>
        <div className="flex flex-row gap-x-4">
          {project.links.map((link, i) => (
            <a href={link} target="_blank">
              <Button variant={"outline"} size={"sm"}>
                {project.linkTypes[i] === LinkType.Figma ? (
                  <Figma className="mr-2 h-4 w-4" />
                ) : project.linkTypes[i] === LinkType.Github ? (
                  <Github className="mr-2 h-4 w-4" />
                ) : (
                  <Laptop className="mr-2 h-4 w-4" />
                )}{" "}
                Link to {project.linkTypes[i]}
              </Button>
            </a>
          ))}
        </div>
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
        <div className="overflow-y-auto flex flex-col items-center gap-y-12 px-8 scrollbar-hide">
          <RecentProjectRow project={articulateProject} />
          <RecentProjectRow project={getTogetherProject} />
          <RecentProjectRow project={outhouseProject} />
          <RecentProjectRow project={chattyjsProject} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
