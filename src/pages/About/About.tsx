import Strings from "@/locales/en.json";

export function About() {
  return (
    <div className="container py-12 flex flex-col gap-y-12 items-center justify-center">
      <div className="flex flex-col gap-y-8 md:w-5/6">
        <h1>{Strings.About.title}</h1>
      </div>
    </div>
  );
}
