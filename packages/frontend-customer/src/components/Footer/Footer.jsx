import { Link } from "react-router-dom";

import { Icon } from "shared-ui";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.topContentWrapper}>
          <div className={css.logoTextWrapper}>
            <Logo name={"logoWhite"} />
            <p className={css.text}>
              Get the medicine to help you feel better, get back to your active
              life, and enjoy every moment.
            </p>
          </div>
          <div className={css.navSocialWrapper}>
            <nav className={css.nav}>
              <ul className={css.linksList}>
                <li>
                  <Link to={"/home"}>Home</Link>
                </li>
                <li>
                  <Link to={"medicine-store"}>Medicine store</Link>
                </li>
                <li>
                  <Link to={"medicine"}>Medicine</Link>
                </li>
              </ul>
            </nav>
            <ul className={css.socialList}>
              <li className={css.socialListItem}>
                <a className={css.link} href="#">
                  <Icon name={"facebook"} />
                </a>
              </li>
              <li className={css.socialListItem}>
                <a className={css.link} href="#">
                  <Icon name={"instagram"} />
                </a>
              </li>
              <li className={css.socialListItem}>
                <a className={css.link} href="#">
                  <Icon name={"youtube"} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className={css.rightsList}>
          <li className={css.item}>© E-Pharmacy 2023. All Rights Reserved</li>
          <li className={css.item}>Privacy Policy</li>
          <li className={css.item}>Terms & Conditions</li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
