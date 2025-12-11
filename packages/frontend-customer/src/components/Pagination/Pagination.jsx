import clsx from "clsx";

import { Icon } from "shared-ui";

import { useIsTablet } from "../../hooks/useIsTablet";
import { getPagination } from "../../utils/getPagination";

import css from "./Pagination.module.css";

const Pagination = ({ changePage, page, pages, setPage }) => {
  const isTablet = useIsTablet();

  const pagination = getPagination(page, pages, isTablet);

  return (
    <div className={css.paginationWrapper}>
      <div className={css.paginationBtns}>
        <button
          type="button"
          onClick={() => changePage(1)}
          className={clsx(
            css.page,
            css.paginationBtn,
            page === 1 && css.disable
          )}
          disabled={page === 1}
        >
          <Icon name={"pag-left"} className={clsx(page === 1 && "disable")} />
          <Icon name={"pag-left"} className={clsx(page === 1 && "disable")} />
        </button>
        <button
          type="button"
          onClick={() => changePage(page - 1)}
          className={clsx(
            css.page,
            css.paginationBtn,
            page === 1 && css.disable
          )}
          disabled={page === 1}
        >
          <Icon name={"pag-left"} className={clsx(page === 1 && "disable")} />
        </button>
      </div>
      <ul className={css.paginationList}>
        {pagination.map((item, idx) => (
          <li
            key={idx}
            className={clsx(css.page, item === page && css.current)}
            onClick={() => {
              if (typeof item === "number") {
                setPage(item);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className={css.paginationBtns}>
        <button
          type="button"
          onClick={() => changePage(page + 1)}
          className={clsx(
            css.page,
            css.paginationBtn,
            page === pages && css.disable
          )}
          disabled={page === pages}
        >
          <Icon
            name={"pag-right"}
            className={clsx(page === pages && "disable")}
          />
        </button>
        <button
          type="button"
          onClick={() => changePage(pages)}
          className={clsx(
            css.page,
            css.paginationBtn,
            page === pages && css.disable
          )}
          disabled={page === pages}
        >
          <Icon
            name={"pag-right"}
            className={clsx(page === pages && "disable")}
          />
          <Icon
            name={"pag-right"}
            className={clsx(page === pages && "disable")}
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
