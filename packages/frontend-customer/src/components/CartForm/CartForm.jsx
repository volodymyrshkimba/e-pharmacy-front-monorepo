import { useForm, useWatch } from "react-hook-form";
import clsx from "clsx";

import { Button, Input } from "shared-ui";

import css from "./CartForm.module.css";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  payment: "cash",
};

const CartForm = () => {
  const { register, handleSubmit, reset, setValue, control } = useForm({
    defaultValues,
  });

  const payment = useWatch({
    control,
    name: "payment",
  });

  const onSubmit = (formData) => {
    console.log(formData);

    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.formTitle}>Enter shipping info </h2>
      <p className={css.text}>
        Enter your delivery address where you get the product. You can also send
        any other location where you send the products.
      </p>
      <div className={css.inputsWrapper}>
        <Input
          name={"name"}
          label={"Name"}
          type={"text"}
          placeholder={"Enter text"}
          className={"cart"}
          register={register}
        />
        <Input
          name={"emial"}
          label={"Email"}
          type={"text"}
          placeholder={"Enter text"}
          className={"cart"}
          register={register}
        />
        <Input
          name={"phone"}
          label={"Phone"}
          type={"tel"}
          placeholder={"Enter text"}
          className={"cart"}
          register={register}
        />
        <Input
          name={"address"}
          label={"Address"}
          type={"text"}
          placeholder={"Enter text"}
          className={"cart"}
          register={register}
        />
      </div>
      <div className={css.paymentMethod}>
        <h2 className={css.formTitle}>Payment method</h2>
        <p className={css.text}>
          You can pay us in a multiple way in our payment gateway system.
        </p>
        <ul className={css.radioList}>
          <li
            className={clsx(css.radio, payment === "cash" && css.active)}
            onClick={() => setValue("payment", "cash")}
          >
            <input
              type="radio"
              {...register("payment")}
              value="cash"
              className={css.hiddenInput}
            />
            <span className={css.circle}></span>Cash On Delivery
          </li>
          <li
            className={clsx(css.radio, payment === "bank" && css.active)}
            onClick={() => setValue("payment", "bank")}
          >
            <input
              type="radio"
              {...register("payment")}
              value="bank"
              className={css.hiddenInput}
            />
            <span className={css.circle}></span>Bank
          </li>
        </ul>
      </div>
      <div className={css.orderDetails}>
        <h2 className={css.formTitle}>Order details</h2>
        <p className={css.text}>
          Shipping and additionnal costs are calculated based on values you have
          entered.
        </p>
        <div className={css.totalWrapper}>
          <p className={css.total}>Total:</p>
          <p className={css.price}>$ 122.00</p>
        </div>
      </div>
      <Button className={"placeOrder"}>Place order</Button>
    </form>
  );
};

export default CartForm;
