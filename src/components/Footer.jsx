import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faPinterest,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { COMMUNITY, COMPANY, PRODUCT, SUPPORT } from "../data";
import FooteriListItems from "./FooteriListItems";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="md:px-[40px] lg:px-[70px] xl:px-[350px] p-6 lg:py-[100px] ">
      <div className="grid grid-cols-3 gap-6 lg:grid-cols-5">
        <FooteriListItems value={PRODUCT} name={"PRODUCT"} />
        <FooteriListItems value={SUPPORT} name={"SUPPORT"} />
        <FooteriListItems value={COMPANY} name={"COMPANY"} />
        <FooteriListItems value={COMMUNITY} name={"COMMUNITY"} />

        <div className="col-span-2 flex flex-col gap-1 lg:gap-3 lg:col-span-1">
          <div className="text-4xl font-bodoni">
            <a href="#">WIX</a>
          </div>
          <div className="text-[#51565a]">
            <p className="text-[13px] leading-loose">
              The Wix Website Builder offers a complete solution from enterprise
              grade infrasturcture and business features to advanced SEO adn
              marketing tools-enabling anyone to create and grow online.
            </p>
            <span className="text-xs">&copy; 2006-2022 Wix.com, Inc</span>
          </div>
          <div>
            <ul className="flex gap-3">
              <SocialIcons value={faFacebookF} />
              <SocialIcons value={faInstagram} />
              <SocialIcons value={faLinkedinIn} />
              <SocialIcons value={faPinterest} />
              <SocialIcons value={faXTwitter} />
              <SocialIcons value={faYoutube} />
              <SocialIcons value={faTiktok} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
