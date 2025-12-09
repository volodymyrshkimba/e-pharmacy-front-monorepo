import { Icon } from "shared-ui";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import User from "../User/User";

import css from "./Header.module.css";

const Header = () => {
  return (
    <Container>
      <header className={css.header}>
        <Logo name={"logo"} />
        <div className={css.userBtnWrapper}>
          <User />
          <button type="button">
            <Icon name={"burger"} />
          </button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
