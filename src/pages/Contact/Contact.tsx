import Strings from "@/locales/en.json";
import contactSVG from "@/assets/contact.svg";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <div className="container flex flex-col gap-y-12 items-center justify-center">
      <img
        src={contactSVG}
        alt="Contact Me"
        className="absolute bottom-0 h-3/4 opacity-70"
      />
      <h1>{Strings.Contact.title}</h1>
      <div className="flex flex-col pt-36 gap-y-16 md:w-5/6 items-center justify-center">
        <div className="flex flex-row gap-x-24 justify-center items-center">
          <div className="cursor-pointer hover:stroke-primary hover:text-primary">
            <FileText className="h-16 w-16 stroke-1" />
            <p className="subtitle">Resume</p>
          </div>
          <div>
            <Mail className="h-16 w-16 stroke-1" />
            <p className="subtitle">Email</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-24 justify-center items-center">
          <div>
            <Linkedin className="h-16 w-16 stroke-1" />
            <p className="subtitle">LinkedIn</p>
          </div>
          <div>
            <Github className="h-16 w-16 stroke-1" />
            <p className="subtitle">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}
