import Container from "../../components/Container/Container";
import CartForm from "../../components/CartForm/CartForm";
import CartItem from "../../components/CartItem/CartItem";

import css from "./CartPage.module.css";

const data = [
  {
    id: "0",
    photo: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
    name: "Vitamin C Medicine",
    description: "Antioxidant Aid for Heart Health",
    stock: "12",
    price: "90.00",
    category: "Medicine",
  },
  {
    id: "1",
    photo: "https://i.ibb.co/Hg0zZkQ/shop-4-7-1000x1000-min.jpg",
    name: "Stomach Medicine",
    description: "Soothes Indigestion, Eases Stomach Pain",
    stock: "19",
    price: "34.16",
    category: "Heart",
  },
];

const CartPage = () => {
  return (
    <main className={css.main}>
      <Container>
        <h1 className={css.title}>Cart</h1>
        <div className={css.pageContent}>
          <CartForm />
          <ul className={css.list}>
            {data.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
};

export default CartPage;
