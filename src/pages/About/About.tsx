import Strings from "@/locales/en.json";
import aboutSVG from "@/assets/about.svg";

export function About() {
  return (
    <div className="container flex flex-col gap-y-12 items-center justify-center pb-10 ">
      <img
        src={aboutSVG}
        alt="About Me"
        className="absolute bottom-0 h-2/5 opacity-70"
      />
      <h1>{Strings.About.title}</h1>
      <div className="z-10 xl:mt-16 flex flex-col items-center justify-center gap-y-8 rounded-md bg-background/50 p-2 md:w-3/4">
        <p className="text-center">{Strings.About.passions}</p>
        <h3 className="text-center">{Strings.About.myWorkExperienceTitle}</h3>
        <p className="text-center">{Strings.About.workExperience}</p>
      </div>
    </div>
  );
}
