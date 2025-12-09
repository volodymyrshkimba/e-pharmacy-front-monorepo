import clsx from "clsx";

import { Icon } from "shared-ui";

import css from "./User.module.css";

const User = ({ theme }) => {
  return (
    <div className={clsx(css.wrapper, css[theme])}>
      <div className={css.cart}>
        <Icon name={"cart"} />
        <span className={css.counter}>0</span>
      </div>
      <div className={css.userLetter}>I</div>
    </div>
  );
};

export default User;
