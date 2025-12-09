import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button, Input } from "shared-ui";

import css from "./RegisterForm.module.css";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
};

const RegisterForm = () => {
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
          name={"name"}
          type={"text"}
          placeholder={"User Name"}
          register={register}
          className={"register"}
        />
        <Input
          name={"email"}
          type={"text"}
          placeholder={"Email address"}
          register={register}
          className={"register"}
        />
        <Input
          name={"phone"}
          type={"text"}
          placeholder={"Phone number"}
          register={register}
          className={"register"}
        />
        <Input
          name={"password"}
          type={"text"}
          placeholder={"Password"}
          register={register}
          className={"register"}
        />
      </div>
      <Button className={"register"}>{"Register"}</Button>
      <Link className={css.loginLink} to={"/login"}>
        {"Already have an account?"}
      </Link>
    </form>
  );
};

export default RegisterForm;
