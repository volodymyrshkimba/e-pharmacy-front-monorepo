import { useForm } from "react-hook-form";

import { Button, Input } from "shared-ui";

import css from "./ModalRegister.module.css";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
};

const ModalRegister = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const onSubmit = (formData) => {
    console.log(formData);

    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={css.title}>Sign Up</p>
      <p className={css.text}>
        Before proceeding, please register on our site.
      </p>
      <div className={css.inputsWrapper}>
        <Input
          name={"name"}
          type={"text"}
          placeholder={"User Name"}
          register={register}
        />
        <Input
          name={"email"}
          type={"text"}
          placeholder={"Email address"}
          register={register}
        />
        <Input
          name={"phone"}
          type={"text"}
          placeholder={"Phone number"}
          register={register}
        />
        <Input
          name={"password"}
          type={"text"}
          placeholder={"Password"}
          register={register}
        />
      </div>
      <Button className={"modalAuth"}>Sign Up</Button>
      <button type="button" className={css.btn}>
        Already have an account?
      </button>
    </form>
  );
};

export default ModalRegister;
