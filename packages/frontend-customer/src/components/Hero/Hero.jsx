import Container from "../Container/Container";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.hero}>
      <Container>
        <h1 className={css.title}>Your medication delivered</h1>
        <p className={css.text}>
          Say goodbye to all your healthcare worries with us
        </p>
      </Container>
    </section>
  );
};

export default Hero;
