import clsx from "clsx";

import { Icon } from "shared-ui";

import css from "./StoreCard.module.css";

const StoreCard = ({ card }) => {
  return (
    <li className={css.card} key={card.phone}>
      <div className={css.leftSideWrapper}>
        <h3 className={css.title}>{card.name}</h3>
        <div className={css.addressAndPhone}>
          <p className={clsx(css.address)}>
            <Icon name={"map-pin"} />
            {card.address}
          </p>
          <p className={css.phone}>
            <Icon name={"phone"} />
            {card.phone}
          </p>
        </div>
      </div>
      <div>
        <div className={css.ratingStatusWrapper}>
          <span className={css.rating}>
            <Icon name={"star"} />
            {card.rating}
          </span>
          <span className={clsx(css.status, css[card.status])}>
            {card.status}
          </span>
        </div>
      </div>
    </li>
  );
};

export default StoreCard;
