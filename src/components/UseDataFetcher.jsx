import { useState } from "react";
import { DATA } from "../data";
import PaginationButtons from "./PaginationButtons";

const UseDataFetcher = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 12;
  const lastPostIndex = (currentPage + 1) * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const data = DATA.slice(firstPostIndex, lastPostIndex);

  const handleClick = selectedItem => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-8 lg:gap-16 px-6 lg:px-12">
        {data.map(product => (
          <div key={product.id} className="w-full">
            <img
              className="max-w-auto max-h-xs"
              src={product.img}
              alt="template"
            />
            <p className="mt-3 text-sm">{product.templatename}</p>
          </div>
        ))}
      </div>
      <div className="py-8 lg:py-[100px]">
        <PaginationButtons
          pageCount={Math.ceil(DATA.length / postsPerPage)}
          currentPage={currentPage}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default UseDataFetcher;
