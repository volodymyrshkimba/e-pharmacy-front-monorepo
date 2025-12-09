import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./NavLinks.module.css";

const NavLinks = ({ mobMenu }) => {
  const isActive = ({ isActive }) => {
    return isActive ? css.active : "";
  };

  return (
    <nav className={clsx(css.nav, mobMenu && css.mobMenu)}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={isActive} to={"/home"}>
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={isActive} to={"medicine-store"}>
            Medicine store
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={isActive} to={"medicine"}>
            Medicine
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
