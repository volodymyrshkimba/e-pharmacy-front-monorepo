import clsx from "clsx";

import css from "./Icon.module.css";

const Icon = ({ name, className }) => {
  return (
    <svg className={clsx(css[name], css[className])}>
      <use href={`/icons.svg#${name}`}></use>
    </svg>
  );
};

export default Icon;
