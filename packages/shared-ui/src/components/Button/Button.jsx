import css from "./Button.module.css";

const Button = ({ children, w, h, onClick, ...props }) => {
  const style = {
    width: w || "auto",
    height: h || "44px",
  };

  return (
    <button className={css.button} style={style} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
