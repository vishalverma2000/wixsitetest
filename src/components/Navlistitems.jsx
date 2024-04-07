import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavListItems = prop => {
  return (
    <li className={`${prop.hover} ${prop.style}`}>
      <a href="#">
        {prop.value}
        <FontAwesomeIcon
          icon={prop.icon}
          className={`mx-[5px] lg:mx-2 ${prop.style} text-[8px] lg:text-[10px]`}
        />
      </a>
    </li>
  );
};

export default NavListItems;
