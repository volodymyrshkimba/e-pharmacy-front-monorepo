import { Button } from "shared-ui";
import Container from "../../components/Container/Container";

import css from "./ProductPage.module.css";
import { Link } from "react-router-dom";

const product = {
  id: "0",
  photo: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
  name: "Aspirin",
  suppliers: "Square",
  stock: "12",
  price: "89.66",
  category: "Medicine",
};

const ProductPage = () => {
  return (
    <main className={css.main}>
      <Container>
        <div className={css.item}>
          <div className={css.thumb}>
            <img className={css.img} src={product.photo} alt={product.name} />
          </div>
          <div className={css.info}>
            <div className={css.namePrice}>
              <div>
                <p>{product.name}</p>
                <p className={css.suppliers}>{product.suppliers}</p>
              </div>
              <div>${product.price}</div>
            </div>
            <div className={css.btnDetails}>
              <div>Count</div>
              <Button className={"addToCart"}>Add to cart</Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ProductPage;
