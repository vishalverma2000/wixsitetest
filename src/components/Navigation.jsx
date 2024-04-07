import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NavListItems from "./Navlistitems";

const Navigation = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between border items-center p-2">
      <di>
        <ul className="flex sm:gap-[8px] lg:gap-8 text-gray-600 lg:px-12 lg:py-3 text-[10px] sm:text-[12px]">
          <NavListItems
            value="Bussiness & Services"
            icon={faChevronDown}
            hover="hover:text-sky-600"
            style="ml-1"
          />
          <NavListItems
            value="Store"
            icon={faChevronDown}
            hover="hover:text-sky-600"
            style="ml-1"
          />
          <NavListItems
            value="Creative"
            icon={faChevronDown}
            hover="hover:text-sky-600"
            style="ml-1"
          />
          <NavListItems
            value="Community"
            icon={faChevronDown}
            hover="hover:text-sky-600"
            style="ml-1"
          />
          <NavListItems
            value="Blog"
            icon={faChevronDown}
            hover="hover:text-sky-600"
            style="ml-1"
          />
        </ul>
      </di>
      <div>
        <ul className="flex gap-5 sm:gap-[20px] lg:gap-8  text-gray-600 px-12 py-3 text-[10px] sm:text-[12px]">
          <NavListItems value="All Templates" hover="hover:text-sky-600" />
          <NavListItems value="Blank Templates" hover="hover:text-sky-600" />
          <NavListItems
            value="Collections"
            icon={faChevronDown}
            hover="hover:text-sky-600"
            style="ml-1"
          />
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
