import { useState } from "react";
import clsx from "clsx";

import { Button, Icon } from "shared-ui";

import Container from "../../components/Container/Container";

import { useIsTablet } from "../../hooks/useIsTablet";
import { timeAgo } from "../../utils/timeAgo";
import { getRatingStars } from "../../utils/getRatingStars";

import css from "./ProductPage.module.css";

const product = {
  id: "0",
  photo: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
  name: "Aspirin",
  suppliers: "Square",
  stock: "12",
  price: "89.66",
  category: "Medicine",
  description: {
    warning:
      "Although it's typically considered safe, excessive consumption can lead to side effects. Therefore, it's recommended to consult a healthcare professional before using moringa, especially if you're pregnant, nursing, or taking other medications. This balanced approach allows for the benefits of moringa while recognizing the importance of proper usage and caution.",
    medicinalUses: [
      {
        title: "Medicinal Uses: Antioxidant Properties",
        text: "Moringa is packed with antioxidants that help fight oxidative stress and inflammation in the body.",
      },
      {
        title: "Anti-Diabetic Effects",
        text: "Some studies have shown that moringa leaves might lower blood sugar levels, making it a valuable supplement for managing diabetes.",
      },
      {
        title: "Heart Health",
        text: "The plant has been linked to reduced cholesterol levels, which is vital for heart health.",
      },
      {
        title: "Anti-Cancer Properties",
        text: "Certain compounds in moringa, such as niazimicin, have been found to suppress the growth of cancer cells in laboratory studies.",
      },
      {
        title: "Immune Support",
        text: "With its high vitamin C content, moringa can boost the immune system.",
      },
      {
        title: "Digestive Aid",
        text: "Moringa can help in treating digestive disorders due to its anti-inflammatory properties.",
      },
    ],
  },
  reviews: [
    {
      name: "Leroy Jenkins",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2025-08-11T14:32:10.123Z",
      rating: 1,
      text: "I've been using Moringa powder in my smoothies for a few weeks now. My energy levels are up, and I feel great. I followed the recommended dosage, and it seems to be a perfect addition to my daily routine. Highly recommend!",
    },
    {
      name: "Jason Smith",
      avatar:
        "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2025-11-15T14:32:10.123Z",
      rating: 3,
      text: "I tried Moringa capsules as part of my wellness regimen, and I've been pleasantly surprised by the results. My skin looks healthier, and I've noticed an improvement in my digestion. A natural and effective supplement!",
    },
    {
      name: "Ann Watkins",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2025-12-12T14:32:10.123Z",
      rating: 5,
      text: "I added Moringa oil to my skincare routine, and the results are amazing. My skin feels smoother and more nourished. I was skeptical at first, but now I'm a firm believer in its benefits.",
    },
  ],
};

const TAB_KEYS = ["description", "reviews"];

const ProductPage = () => {
  const isTablet = useIsTablet();
  const [amount, setAmount] = useState(1);

  const tabs = {
    description: (
      <ul className={css.descList}>
        <li className={css.descItem}>{product.description.warning}</li>
        {product.description.medicinalUses.map((item) => (
          <li className={css.descItem} key={item.text}>
            {item.title}: <span className={css.descText}>{item.text}</span>
          </li>
        ))}
      </ul>
    ),
    reviews: (
      <ul>
        {product.reviews.map((review) => (
          <li className={css.revItem} key={review.text}>
            <div className={css.userRaringWrapper}>
              <div className={css.avatarNameWrapper}>
                <div className={css.revThumb}>
                  <img
                    className={css.revImg}
                    src={review.avatar}
                    alt={review.name}
                  />
                </div>
                <div>
                  <p className={css.revTitle}>{review.name}</p>
                  <p className={css.revDate}>{timeAgo(review.date)}</p>
                </div>
              </div>
              <div className={css.ratingWrapper}>
                <div className={css.stars}>
                  {getRatingStars(review.rating, isTablet).map((item, i) => (
                    <Icon
                      name={"star"}
                      className={clsx(item === "e" && "starEmpty")}
                      key={i}
                    />
                  ))}
                </div>
                {review.rating}
              </div>
            </div>
            <p className={css.revText}>{review.text}</p>
          </li>
        ))}
      </ul>
    ),
  };

  const [tab, setTab] = useState(TAB_KEYS[0]);

  return (
    <main className={css.main}>
      <Container>
        <div className={css.contentWrapper}>
          <div className={css.item}>
            <div className={css.thumb}>
              <img className={css.img} src={product.photo} alt={product.name} />
            </div>
            <div className={css.info}>
              <div className={css.namePrice}>
                <div>
                  <p className={css.productName}>{product.name}</p>
                  <p className={css.suppliers}>{product.suppliers}</p>
                </div>
                <div>${product.price}</div>
              </div>
              <div className={css.btnAmount}>
                <div className={css.amount}>
                  <button
                    type="button"
                    onClick={() => {
                      setAmount(amount + 1);
                    }}
                  >
                    <Icon name={"plus"} />
                  </button>
                  <p>{amount}</p>
                  <button
                    type="button"
                    onClick={() => {
                      if (amount === 1) return;
                      setAmount(amount - 1);
                    }}
                  >
                    <Icon name={"minus"} />
                  </button>
                </div>
                <Button className={"addToCartProductPage"}>Add to cart</Button>
              </div>
            </div>
          </div>
          <div className={css.descReviewWrapper}>
            <div className={css.btnsWrapper}>
              <button
                type="button"
                className={clsx(css.tabBtn, tab === TAB_KEYS[0] && css.active)}
                onClick={() => setTab(TAB_KEYS[0])}
              >
                {TAB_KEYS[0]}
              </button>
              <button
                type="button"
                className={clsx(css.tabBtn, tab === TAB_KEYS[1] && css.active)}
                onClick={() => setTab(TAB_KEYS[1])}
              >
                {TAB_KEYS[1]}
              </button>
            </div>
            {tabs[tab]}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ProductPage;
