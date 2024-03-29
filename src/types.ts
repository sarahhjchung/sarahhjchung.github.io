export interface Project {
  imgSRC: string;
  title: string;
  labels: string[];
  description: string;
  links: string[];
  linkTypes: LinkType[];
}

export enum LinkType {
  Figma = "Figma",
  Github = "Github",
  Website = "Website",
}
