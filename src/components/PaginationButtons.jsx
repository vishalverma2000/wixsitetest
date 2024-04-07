import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";

const PaginationButtons = Prop => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      }
      onPageChange={Prop.handleClick}
      pageCount={Prop.pageCount}
      previousLabel={
        <span>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>
      }
      renderOnZeroPageCount={null}
      containerClassName="flex items-center justify-center mt-0 lg:mt-8 mb-4 gap-6 "
      pageClassName="hover:text-sky-600 text-md lg:text-3xl"
      activeClassName="text-sky-600"
      forcePage={Prop.currentPage}
    />
  );
};

export default PaginationButtons;
