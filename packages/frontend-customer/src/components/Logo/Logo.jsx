import { Link } from "react-router-dom";

import { SiteLogo } from "shared-ui";

const Logo = ({ name }) => {
  return (
    <Link to={"/home"}>
      <SiteLogo name={name} />
    </Link>
  );
};

export default Logo;
