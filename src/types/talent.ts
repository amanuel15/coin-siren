import type { StaticImageData } from "next/image";

export interface ITalent {
  first_name: string;
  last_name: string;
  profile_picture: string; // URL
  field: string; // e.g. "Marketing"
  yoe: number; // Years of Experience e.g. 2.5
  skills: string[]; // e.g. ["Marketing content creation", "Instagram Management"]
  country_code: string; // e.g. "KR"
}

export interface IService {
  title: string;
  icon: StaticImageData;
}
