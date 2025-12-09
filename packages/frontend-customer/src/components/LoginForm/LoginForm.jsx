import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button, Input } from "shared-ui";

import css from "./LoginForm.module.css";

const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const onSubmit = (formData) => {
    console.log(formData);

    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputsWrapper}>
        <Input
          name={"email"}
          type={"text"}
          placeholder={"Email address"}
          register={register}
        />
        <Input
          name={"password"}
          type={"text"}
          placeholder={"Password"}
          register={register}
        />
      </div>
      <Button className={"login"}>{"Log in"}</Button>
      <Link className={css.registerLink} to={"/register"}>
        {"Don't have an account?"}
      </Link>
    </form>
  );
};

export default LoginForm;
