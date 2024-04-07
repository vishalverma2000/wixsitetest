import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = Prop => {
  return (
    <>
      <li>
        <a href="">
          <FontAwesomeIcon
            icon={Prop.value}
            className=" hover:text-sky-600 text-[#51565a]"
          />
        </a>
      </li>
    </>
  );
};

export default SocialIcons;
