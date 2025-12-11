import Container from "../Container/Container";
import StoreCard from "../StoreCard/StoreCard";

import css from "./NearestStore.module.css";

const data = [
  {
    name: "Wellness Pharma",
    address: "Reitarska St, 17",
    city: "Kyiv",
    phone: "045-256-9564",
    rating: 2,
    status: "open",
  },
  {
    name: "Family Drugstore",
    address: "Petra Sahaidachnoho St, 32",
    city: "Kyiv",
    phone: "045-416-3199",
    rating: 1,
    status: "close",
  },
  {
    name: "Bright Health Pharmacy",
    address: "Mezhyhirska St, 17",
    city: "Kyiv",
    phone: "050-858-9718",
    rating: 1,
    status: "open",
  },
  {
    name: "Bright Health Pharmacy",
    address: "Vozdvyzhenka St, 8",
    city: "Kyiv",
    phone: "045-403-6079",
    rating: 1,
    status: "open",
  },
  {
    name: "Green Cross Pharmacy",
    address: "Reitarska St, 8",
    city: "Kyiv",
    phone: "048-623-5168",
    rating: 1,
    status: "close",
  },
  {
    name: "MediServe Pharmacy",
    address: "Velyka Vasylkivska St, 34",
    city: "Kyiv",
    phone: "050-381-2329",
    rating: 5,
    status: "open",
  },
  {
    name: "Green Cross Pharmacy",
    address: "Reitarska St, 2",
    city: "Kyiv",
    phone: "067-278-1856",
    rating: 1,
    status: "close",
  },
  {
    name: "Bright Health Pharmacy",
    address: "Vozdvyzhenka St, 19",
    city: "Kyiv",
    phone: "048-947-8907",
    rating: 4,
    status: "open",
  },
  {
    name: "Healthline Chemists",
    address: "Mezhyhirska St, 13",
    city: "Kyiv",
    phone: "044-284-5317",
    rating: 4,
    status: "close",
  },
];

const NearestStore = () => {
  return (
    <section className={css.section}>
      <Container>
        <h3 className={css.title}>Your Nearest Medicine Store</h3>
        <p className={css.subtitle}>
          Search for Medicine, Filter by your location
        </p>
        <ul className={css.list}>
          {data.map((card) => (
            <StoreCard card={card} key={card.phone} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default NearestStore;
