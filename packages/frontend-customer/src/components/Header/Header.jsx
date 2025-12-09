import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { clsx } from "clsx";

import { Button, Icon } from "shared-ui";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import User from "../User/User";
import NavLinks from "../NavLinks/NavLinks";
import MobMenu from "../MobMenu/MobMenu";

import css from "./Header.module.css";

const isLogedIn = false;

const Header = ({ theme }) => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={css.header}>
        <Container>
          <div className={clsx(css.headerContent, css[theme])}>
            <Logo name={theme === "light" ? "logoWhite" : "logo"} />
            <div className={css.userBtnWrapper}>
              {isLogedIn ? (
                <>
                  <User theme={theme} />
                  <Button
                    stroke
                    className={theme === "light" ? "logOutLight" : "logOut"}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <div className={css.authBtns}>
                  <Button
                    stroke
                    className={
                      theme === "light"
                        ? "registerHeaderLight"
                        : "registerHeader"
                    }
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                  <Link className={css.loginBtn} to={"/login"}>
                    Login
                  </Link>
                </div>
              )}
              <button
                className={css.burger}
                type="button"
                onClick={() => setMenuOpen(true)}
              >
                <Icon
                  name={"burger"}
                  className={theme === "light" ? "burgerLight" : ""}
                />
              </button>
            </div>
            <NavLinks />
          </div>
        </Container>
      </header>

      {menuOpen && <MobMenu closeMenu={closeMenu} />}
    </>
  );
};

export default Header;
