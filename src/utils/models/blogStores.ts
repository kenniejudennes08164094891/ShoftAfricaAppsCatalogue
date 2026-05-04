import { JSX } from "react";
import Blog1 from "../../components/InvestigativeBlogs/blog1";
import Tinubu from '..//../assets/images/tinubu.jpg';

export const BlogImages = {
Tinubu
}

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
    title: "What can Nigerians do to heal in Tinubu's second term",
    subTitle: "Beyond the Ballot: Healing Nigeria in a second term will depend less on promises and more on accountability, unity, and real economic relief for everyday citizens.",
    date: "May 4, 2026",
    image: BlogImages.Tinubu,
    content: Blog1
  },
  // {
  //   id: "investigative-journalism",
  //   title: "Can Nigeria's Fuel Subsidy Be Effectively Reformed? An In-Depth Analysis",
  //   subTitle: "Exploring the complexities and potential solutions for Nigeria's fuel subsidy reform.",
  //   date: "May 4, 2026",
  //   image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  //   content: Blog1
  // },
];