import { Link, useNavigate } from "react-router-dom";

import { Button, Icon } from "shared-ui";

import NavLinks from "../NavLinks/NavLinks";

import css from "./MobMenu.module.css";

const isLogedIn = false;

const MobMenu = ({ closeMenu }) => {
  const navigate = useNavigate();

  return (
    <div className={css.overlay}>
      <div className={css.menu}>
        <button className={css.closeBtn} type="button" onClick={closeMenu}>
          <Icon name={"close"} />
        </button>
        <NavLinks mobMenu />
        <div className={css.authBtnsWrapper}>
          {isLogedIn ? (
            <Button stroke className={"logOutLightMob"} type={"button"}>
              Log out
            </Button>
          ) : (
            <>
              <Button
                stroke
                className={"registerHeaderLightMob"}
                onClick={() => navigate("/register")}
                type={"button"}
              >
                Register
              </Button>
              <Link className={css.loginBtn} to={"/login"}>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobMenu;
