import { JSX } from "react";
import Blog1 from "../../components/InvestigativeBlogs/blog1";

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/'/g, "")                // remove apostrophes
    .replace(/[^a-z0-9]+/g, "-")     // replace spaces & symbols with -
    .replace(/(^-|-$)/g, "");        // trim - from start/end

export interface BlogPost {
  id: string;
  title: string;
  subTitle: string;
  date: string;
  image: string;
  content: () => JSX.Element;
}


export const blogPosts: BlogPost[] = [
  {
    id: "investigative-journalism",
    title: "Can Nigeria's Fuel Subsidy Be Effectively Reformed? An In-Depth Analysis",
    subTitle: "Exploring the complexities and potential solutions for Nigeria's fuel subsidy reform.",
    date: "May 4, 2026",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
     content: Blog1
  }
];