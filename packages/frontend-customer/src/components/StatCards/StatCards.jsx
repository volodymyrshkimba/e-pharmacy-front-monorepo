import { Link } from "react-router-dom";

import Container from "../Container/Container";

import css from "./StatCards.module.css";

const StatCards = () => {
  return (
    <section className={css.section}>
      <Container>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.titleWrapper}>
              <p className={css.number}>1</p>
              <p className={css.name}>Huge Sale</p>
            </div>
            <div className={css.percenegeWrapper}>
              <p className={css.percentage}>70%</p>
              <Link className={css.btn} to={"/medicine-store"}>
                Shop now
              </Link>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.titleWrapper}>
              <p className={css.number}>2</p>
              <p className={css.name}>Secure delivery</p>
            </div>
            <div className={css.percenegeWrapper}>
              <p className={css.percentage}>100%</p>
              <Link className={css.btn} to={"/medicine-store"}>
                Read more
              </Link>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.titleWrapper}>
              <p className={css.number}>3</p>
              <p className={css.name}>Off</p>
            </div>
            <div className={css.percenegeWrapper}>
              <p className={css.percentage}>35%</p>
              <Link className={css.btn} to={"/medicine-store"}>
                Shop now
              </Link>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default StatCards;
