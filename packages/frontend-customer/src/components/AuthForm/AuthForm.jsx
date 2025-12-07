import { useForm } from "react-hook-form";

import { Button, Input } from "shared-ui";

import css from "./AuthForm.module.css";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
};

const defaultValuesLogin = {
  email: "",
  password: "",
};

const AuthForm = ({ isLogin }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: isLogin ? defaultValuesLogin : defaultValues,
  });

  const onSubmit = (formData) => {
    console.log(formData);

    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputsWrapper}>
        {!isLogin && (
          <Input
            name={"name"}
            type={"text"}
            placeholder={"User Name"}
            register={register}
          />
        )}
        <Input
          name={"email"}
          type={"text"}
          placeholder={"Email address"}
          register={register}
        />
        {!isLogin && (
          <Input
            name={"phone"}
            type={"text"}
            placeholder={"Phone number"}
            register={register}
          />
        )}
        <Input
          name={"password"}
          type={"text"}
          placeholder={"Password"}
          register={register}
        />
      </div>
      <Button w={"100%"}>{isLogin ? "Log in" : "Register"}</Button>
    </form>
  );
};

export default AuthForm;
