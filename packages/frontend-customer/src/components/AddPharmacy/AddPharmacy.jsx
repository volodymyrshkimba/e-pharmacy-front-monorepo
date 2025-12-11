import { Button, Picture } from "shared-ui";

import Container from "../Container/Container";

import css from "./AddPharmacy.module.css";

const AddPharmacy = () => {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.wrapper}>
          <div className={css.textContentWrapper}>
            <h2 className={css.title}>Add the medicines you need online now</h2>
            <p className={css.text}>
              Enjoy the convenience of having your prescriptions filled from
              home by connecting with your community pharmacy through our online
              platform.
            </p>
            <Button stroke className={"addLight"} type={"button"}>
              Buy medicine
            </Button>
          </div>
          <div className={css.thumb}>
            <Picture name={"add"} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AddPharmacy;
