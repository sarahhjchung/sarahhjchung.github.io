export interface Project {
  imgSRC: string;
  title: string;
  labels: string[];
  description: string;
  link: string;
  linkType: LinkType;
}

export enum LinkType {
  Figma = "Figma",
  Github = "Github",
  Website = "Website",
}
