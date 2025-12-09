import clsx from "clsx";

import Picture from "../Picture/Picture";

import css from "./SiteLogo.module.css";

const SiteLogo = ({ name }) => {
  return (
    <span className={clsx(css.logoBasic, css[name])}>
      <Picture name={name} alt={name} />
      <span>E-Pharmacy</span>
    </span>
  );
};

export default SiteLogo;
