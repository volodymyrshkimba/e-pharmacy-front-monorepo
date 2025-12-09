import clsx from "clsx";

import css from "./Button.module.css";

const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={clsx(css.button, css[className])}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
