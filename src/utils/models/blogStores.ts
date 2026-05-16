import { JSX } from "react";
import Blog1 from "../../components/InvestigativeBlogs/blog1";
import Tinubu from '..//../assets/images/tinubu.jpg';
import Blog2 from "../../components/InvestigativeBlogs/blog2";
import Fuel from '..//../assets/images/Fuel.jpg';
import Blog3 from "../../components/InvestigativeBlogs/blog3";
import Africa from '..//../assets/images/africa4.png';
import Blog4 from "../../components/InvestigativeBlogs/blog4";
import Humanoids from '..//../assets/images/humanoids.jpg';
import Blog5 from "../../components/InvestigativeBlogs/blog5";
import fake from '..//../assets/images/fake.jpg';
import Blog6 from "../../components/InvestigativeBlogs/blog6";
import Mine2 from '..//../assets/images/Mine2.jpeg'
import Blog7 from "../../components/InvestigativeBlogs/blog7";
import Africanwoman  from '..//../assets/images/Africanwoman.png'
import Eductation  from '..//../assets/images/education.jpg'
import Blog8 from "../../components/InvestigativeBlogs/blog8";



export const BlogImages = {
  Tinubu, Fuel, Africa, Humanoids, fake, Mine2, Africanwoman,Eductation
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

// Reasons why a litre of fuel might be N5000 in the next 2yrs.
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
   {
    id: "investigative-journalism",
    title: "Reasons why Humanoids may replace Humans in the next few decades.",
    subTitle: "Hey!..Leave him alone...That's not Tunde. That's Tunde's clone!",
    date: "May 12, 2026",
    routePath: "humanoids/",
    image: BlogImages.Humanoids,
    content: Blog4
  },
  {
    id: "investigative-journalism",
    title: "The Dark Business of Fake Universities and Certificate Fraud.",
    subTitle: "How thousands of fake degrees may circulate across Africa in next few years, affecting healthcare, engineering, politics, and national security.",
    date: "May 11, 2026",
    routePath: "fraud/",
    image: BlogImages.fake,
    content: Blog5
  },
 
 {
    id: "investigative-journalism",
    title: "Are Foreign Mining Companies Exploiting Africa’s Rare Minerals?",
    subTitle:"A deep look into lithium, cobalt, and gold mining operations linked to environmental destruction, child labor, and secret export deals.",
    date: "May 13, 2026",
    routePath: "mining/",
    image:BlogImages.Mine2,
    content: Blog6
  },
  {
    id: "investigative-journalism",
    title: "The Silent Struggle of African Women: The Untold Reality of Menstrual Pain Across the Continent",
    subTitle: "Millions suffer every month while their pain is dismissed as normal",
    date: "May 16, 2026",
    routePath: "african-women/",
    image: BlogImages.Africanwoman,
    content: Blog7
  },
     {
    id: "investigative-journalism",
    title: "True Education knows no four walls",
    subTitle: "It is built from the conciousness within, and the knowledge without.",
    date: "May 17, 2026",
    routePath: "education/",
    image: BlogImages.Eductation,
    content: Blog8
  },
];