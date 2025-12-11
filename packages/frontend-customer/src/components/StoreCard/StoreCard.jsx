import clsx from "clsx";

import { Button, Icon } from "shared-ui";

import css from "./StoreCard.module.css";

const StoreCard = ({ card, medicinePage }) => {
  const ratingStatusWrapper = (
    <div className={css.ratingStatusWrapper}>
      <span className={css.rating}>
        <Icon name={"star"} />
        {card.rating}
      </span>
      <span className={clsx(css.status, css[card.status])}>{card.status}</span>
    </div>
  );

  return (
    <li className={clsx(css.card, medicinePage && css.medicinePage)}>
      <div className={css.leftSideWrapper}>
        <h3 className={css.title}>{card.name}</h3>
        <div className={css.addressAndPhone}>
          <p className={clsx(css.address)}>
            <Icon name={"map-pin"} />
            {card.address} {card.city}
          </p>
          <p className={css.phone}>
            <Icon name={"phone"} />
            {card.phone}
          </p>
        </div>
        {medicinePage && (
          <div className={css.buttonRatingWrapper}>
            <Button className={"visit"} type={"button"}>
              Visit Store
            </Button>
            {ratingStatusWrapper}
          </div>
        )}
      </div>
      {!medicinePage && ratingStatusWrapper}
    </li>
  );
};

export default StoreCard;
