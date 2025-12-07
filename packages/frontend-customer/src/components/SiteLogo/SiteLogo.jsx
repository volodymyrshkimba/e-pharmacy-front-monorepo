import { Link } from "react-router-dom";
import { Picture } from "shared-ui";

import css from "./SiteLogo.module.css";

const SiteLogo = () => {
  return (
    <Link className={css.logoLink} to={"/"}>
      <Picture name={"logo"} alt={"logo"} />
      <span>E-Pharmacy</span>
    </Link>
  );
};

export default SiteLogo;
