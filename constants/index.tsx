import { FaArchive, FaCheckDouble, FaFile, FaLink } from "react-icons/fa";

export const menuItems = [
  {
    title: "Skills",
    scrollTo: "skills",
    icon: <FaCheckDouble />,
    color: "navSky",
  },
  {
    title: "Projects",
    scrollTo: "projects",
    icon: <FaArchive />,
    color: "navRed",
  },
  {
    title: "Experience",
    scrollTo: "experience",
    icon: <FaFile />,
    color: "navGreen",
  },
  {
    title: "Contact",
    scrollTo: "contact",
    icon: <FaLink />,
    color: "navViolet",
  },
];
