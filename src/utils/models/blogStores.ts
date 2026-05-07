import { JSX } from "react";
import Blog1 from "../../components/InvestigativeBlogs/blog1";
import Tinubu from '..//../assets/images/tinubu.jpg';
import Blog2 from "../../components/InvestigativeBlogs/blog2";
import Fuel from '..//../assets/images/Fuel.jpg';
import Blog3 from "../../components/InvestigativeBlogs/blog3";
import Africa from '..//../assets/images/africa4.png';

export const BlogImages = {
  Tinubu, Fuel,Africa
}

export const shoftAfricaWebsite: string = "https://web.shoftafrica.com";

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
  routePath: string;
  image: string;
  content: () => JSX.Element;
}

// Reasons why a litre of fuel might be N5000 in the next 2yrs
export const blogPosts: BlogPost[] = [
  {
    id: "investigative-journalism",
    title: "What can Nigerians do to heal in Tinubu's second term",
    subTitle: "Beyond the Ballot: Healing Nigeria in a second term will depend less on promises and more on accountability, unity, and real economic relief for everyday citizens.",
    date: "May 4, 2026",
    routePath: "",
    image: BlogImages.Tinubu,
    content: Blog1
  },
  {
    id: "investigative-journalism",
    title: "Reasons why a litre of fuel might be ₦5,000 in the next 2yrs",
    subTitle: "Global Drama, Local Pain: How wahala in the Middle East ends up at your local filling station.",
    date: "May 5, 2026",
    routePath: "fuel/",
    image: BlogImages.Fuel,
    content: Blog2
  },
  {
    id: "investigative-journalism",
    title: "When Africa rises, the world feels it. But when Africa falls, the world profits from it.",
    subTitle: "A win accross Africa is a loss to the rest of the world...and a loss accross africa is a win to the rest of the world",
    date: "May 7, 2026",
    routePath: "africa/",
    image: BlogImages.Africa,
    content: Blog3
  },
];