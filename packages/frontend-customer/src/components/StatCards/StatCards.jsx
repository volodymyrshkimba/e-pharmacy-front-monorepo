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
              <p className={css.btn}>Shop now</p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.titleWrapper}>
              <p className={css.number}>2</p>
              <p className={css.name}>Secure delivery</p>
            </div>
            <div className={css.percenegeWrapper}>
              <p className={css.percentage}>100%</p>
              <p className={css.btn}>Read more</p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.titleWrapper}>
              <p className={css.number}>3</p>
              <p className={css.name}>Off</p>
            </div>
            <div className={css.percenegeWrapper}>
              <p className={css.percentage}>35%</p>
              <p className={css.btn}>Shop now</p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default StatCards;
