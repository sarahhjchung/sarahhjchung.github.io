import Strings from "@/locales/en.json";
import aboutSVG from "@/assets/about.svg";
import techinternPNG from "@/assets/techintern.png";
import hatcheryPNG from "@/assets/hatchery.png";
import wattpadPNG from "@/assets/wattpad.png";
import { MoveRight } from "lucide-react";

export function About() {
  return (
    <div className="container flex flex-col gap-y-12 items-center justify-center pb-10 ">
      <img
        src={aboutSVG}
        alt="About Me"
        className="absolute bottom-0 w-3/5 opacity-70"
      />
      <h1>{Strings.About.title}</h1>
      <div className="flex flex-col items-center justify-center gap-y-8 md:w-5/6">
        {/* <h3>{Strings.About.myPassionsTitle}</h3>
        <p className="text-center">{Strings.About.passions}</p> */}
        <h3>{Strings.About.myWorkExperienceTitle}</h3>
        <p>{Strings.About.workExperience}</p>
        <div className="flex flex-row items-center justify-center gap-x-4">
          <img
            src={techinternPNG}
            alt="Techintern"
            className="rounded-md h-12"
          />
          <MoveRight />
          <img src={hatcheryPNG} alt="Hatchery" className="rounded-md h-12" />
          <MoveRight />
          <img src={wattpadPNG} alt="Wattpad" className="rounded-md h-12" />
        </div>
      </div>
    </div>
  );
}
