import { useState } from "react";

import css from "./CartItem.module.css";
import { Icon } from "shared-ui";

const CartItem = ({ item }) => {
  const [amount, setAmount] = useState(1);

  return (
    <li className={css.item}>
      <div className={css.thumb}>
        <img className={css.img} src={item.photo} alt={item.name} />
      </div>
      <div className={css.info}>
        <div className={css.titlePrice}>
          <div className={css.nameDesc}>
            <p className={css.name}>{item.name}</p>
            <p className={css.desc}>{item.description}</p>
          </div>
          <p className={css.price}>$ {item.price}</p>
        </div>
        <div className={css.amountRemove}>
          <div className={css.amount}>
            <button
              type="button"
              onClick={() => {
                setAmount(amount + 1);
              }}
            >
              <Icon name={"plus"} className={"cart"} />
            </button>
            <p>{amount}</p>
            <button
              type="button"
              onClick={() => {
                if (amount === 1) return;
                setAmount(amount - 1);
              }}
            >
              <Icon name={"minus"} className={"cart"} />
            </button>
          </div>
          <button className={css.removeBtn} type="button">
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
