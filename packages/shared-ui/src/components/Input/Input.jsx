import { useId } from "react";

import css from "./Input.module.css";

const Input = ({ name, type, label, placeholder, id, register, ...props }) => {
  const reactId = useId();

  const inputId = id || reactId;

  return (
    <div className={css.wrapper}>
      {label && (
        <label htmlFor={inputId} className={css.label}>
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={css.input}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        {...props}
      />
    </div>
  );
};

export default Input;
