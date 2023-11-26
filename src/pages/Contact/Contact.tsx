import Strings from "@/locales/en.json";
import contactSVG from "@/assets/contact.svg";
import resumePDF from "@/assets/resume.pdf";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <div className="container flex flex-col gap-y-12 items-center justify-center">
      <img
        src={contactSVG}
        alt="Contact Me"
        className="absolute bottom-0 h-4/5 opacity-70"
      />
      <h1>{Strings.Contact.title}</h1>
      <div className="z-10 flex flex-col pt-36 gap-y-16 md:w-5/6 items-center justify-center">
        <div className="flex flex-row gap-x-24 justify-center items-center">
          <a href={resumePDF} target="_blank">
            <div className="cursor-pointer hover:stroke-primary hover:text-primary">
              <FileText className="h-16 w-16 stroke-1" />
              <p className="subtitle">Resume</p>
            </div>
          </a>
          <a href="mailto: sarahc0304@gmail.com" target="_blank">
            <div className="cursor-pointer hover:stroke-primary hover:text-primary">
              <Mail className="h-16 w-16 stroke-1" />
              <p className="subtitle">Email</p>
            </div>
          </a>
        </div>
        <div className="flex flex-row gap-x-24 justify-center items-center">
          <a
            href="https://www.linkedin.com/in/sarah-chung-59a923202/"
            target="_blank"
          >
            <div className="cursor-pointer hover:stroke-primary hover:text-primary">
              <Linkedin className="h-16 w-16 stroke-1" />
              <p className="subtitle">LinkedIn</p>
            </div>
          </a>
          <a href="https://github.com/sarahhjchung" target="_blank">
            <div className="cursor-pointer hover:stroke-primary hover:text-primary">
              <Github className="h-16 w-16 stroke-1" />
              <p className="subtitle">Github</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
