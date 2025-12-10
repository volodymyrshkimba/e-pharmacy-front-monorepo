import { Icon } from "shared-ui";
import css from "./ScrollingText.module.css";

const data = [
  "Take user orders form online",
  "Create your shop profile",
  "Manage your store",
  "Get more orders",
  "Storage shed",
];

const ScrollingText = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {data.map((item) => (
          <li className={css.item} key={item}>
            <Icon name={"lightning"} /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollingText;
