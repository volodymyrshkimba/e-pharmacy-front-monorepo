import { useForm } from "react-hook-form";

import { Button, Input } from "shared-ui";

import css from "./ModalLogin.module.css";

const defaultValues = {
  email: "",
  password: "",
};

const ModalLogin = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const onSubmit = (formData) => {
    console.log(formData);

    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={css.title}>Log in to your account</p>
      <p className={css.text}>
        Please login to your account before continuing.
      </p>
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
      <Button className={"modalAuth"}>Log in</Button>
      <button type="button" className={css.btn}>
        Don't have an account?
      </button>
    </form>
  );
};

export default ModalLogin;
