import { Icon } from "shared-ui";

import css from "./User.module.css";

const User = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.cart}>
        <Icon name={"cart"} />
        <span className={css.counter}>0</span>
      </div>
      <div className={css.userLetter}>I</div>
    </div>
  );
};

export default User;
