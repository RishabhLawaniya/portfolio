export interface NavLink {
  name: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  details?: string[];
  tags: string[];
  image: string;
  link: string;
}

export interface TimelineItem {
  id: number;
  title: string;
  location: string;
  description: string;
  date: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}