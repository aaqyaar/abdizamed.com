export type features = {
  id: number;
  name: string;
  description: string;
  features: [];
};

export type Techs = string;

export type Project = {
  id: string;
  name: string;
  description: string;
  features: features[];
  techs: string[];
};

export type Projects = Project[];
