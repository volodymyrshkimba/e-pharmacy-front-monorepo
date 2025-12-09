import clsx from "clsx";

import css from "./Button.module.css";

const Button = ({ children, className, stroke, onClick, ...props }) => {
  return (
    <button
      className={clsx(
        !stroke && css.button,
        css[className],
        stroke ? css.stroke : ""
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
