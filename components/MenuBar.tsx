import { menuItems } from "@/constants";
import Image from "next/image";
import { FaBoxArchive, FaCheckDouble, FaFile, FaLink } from "react-icons/fa6";

const MenuBar = () => {
  return (
    <section className="fixed left-0 top-0 h-full w-[80px] z-50 backdrop:blur-[3px] border-r-[1px] border-r-white">
      <ul className="flex w-full flex-col justify-center items-center gap-8 mt-5">
        {menuItems.map((item) => (
          <li key={item.id} className="cursor-pointer">
            {item.icon === "doubleCheck" && (
              <FaCheckDouble
                className="size-5 transition-all duration-300 hover:shadow-dropLight hover:shadow-navSky"
                fill={item.color}
              />
            )}
            {item.icon === "archive" && (
              <FaBoxArchive
                className="size-5 transition-all duration-300 hover:shadow-dropLight hover:shadow-navRed"
                fill={item.color}
              />
            )}
            {item.icon === "file" && (
              <FaFile
                className="size-5 transition-all duration-300 hover:shadow-dropLight hover:shadow-navGreen"
                fill={item.color}
              />
            )}
            {item.icon === "link" && (
              <FaLink
                className="size-5 transition-all duration-300 hover:shadow-dropLight hover:shadow-navViolet"
                fill={item.color}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuBar;
