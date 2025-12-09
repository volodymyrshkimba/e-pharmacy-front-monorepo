import css from "./Icon.module.css";

const Icon = ({ name }) => {
  return (
    <svg className={css[name]}>
      <use href={`/icons.svg#${name}`}></use>
    </svg>
  );
};

export default Icon;
