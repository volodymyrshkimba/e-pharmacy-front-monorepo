import { Button, Icon } from "shared-ui";

import NavLinks from "../NavLinks/NavLinks";

import css from "./MobMenu.module.css";

const isLogedIn = false;

const MobMenu = ({ closeMenu }) => {
  return (
    <div className={css.overlay}>
      <div className={css.menu}>
        <button className={css.closeBtn} type="button" onClick={closeMenu}>
          <Icon name={"close"} />
        </button>
        <NavLinks mobMenu />
        <div className={css.authBtnsWrapper}>
          {isLogedIn ? (
            <Button stroke className={"logOutLightMob"}>
              Log out
            </Button>
          ) : (
            <>
              <Button stroke className={"registerHeaderLightMob"}>
                Register
              </Button>
              <button className={css.loginBtn} type="button">
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobMenu;
