import { menuItems } from "@/constants";

const MenuBar = () => {
  return (
    <section className="fixed left-0 top-0 h-full w-[100px] z-50 backdrop:blur-[3px] border-r-[1px] border-r-white">
      {menuItems.map((item) => (
        <div>
          {item.icon}
          {item.title}
        </div>
      ))}
    </section>
  );
};

export default MenuBar;
