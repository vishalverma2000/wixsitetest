import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NavListItems from "./Navlistitems";
import UseDataFetcher from "./UseDataFetcher";

const Main = () => {
  return (
    <main>
      <div className=" p-6 lg:px-12 lg:pt-16 pb-8 flex justify-between">
        <div>
          <h2 className="font-bold text-xs lg:text-xl">
            All Website Templates
          </h2>
        </div>
        <div className="flex text-xs lg:text-xl">
          Sort by:
          <ul>
            <NavListItems
              value="Recommended"
              icon={faChevronDown}
              hover="hover:text-sky-600"
              style="font-bold ml-2"
            />
          </ul>
        </div>
      </div>
      <UseDataFetcher />
      <div className=" flex flex-col items-center bg-[#055947] text-white gap-5 lg:gap-8 py-16 lg:py-32">
        <h3 className=" text-2xl lg:text-5xl font-bold">
          Want Help Picking a Template
        </h3>
        <p className="text-sm lg:text-xl">
          Get Tips for finding the template that right for you.
        </p>
        <button className="px-6 lg:px-7 py-2 bg-white text-[#055947] rounded-full">
          Help Me Choose
        </button>
      </div>
    </main>
  );
};

export default Main;
