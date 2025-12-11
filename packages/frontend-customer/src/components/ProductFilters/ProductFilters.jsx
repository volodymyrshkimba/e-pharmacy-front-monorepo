import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { Button, Icon, Input } from "shared-ui";

import css from "./ProductFilters.module.css";

const defaultValues = {
  name: "",
  category: "",
};

const ProductFilters = ({ categories }) => {
  const { register, handleSubmit, reset, setValue, control } = useForm({
    defaultValues,
  });
  const [open, setOpen] = useState(false);

  const selectedCategory = useWatch({
    control,
    name: "category",
  });

  const onSubmit = (formData) => {
    console.log(formData);

    reset();
  };

  const selectCategory = (item) => {
    setValue("category", item);
    setOpen(false);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputsWrapper}>
        <div className={css.selectWrapper}>
          <button
            className={css.select}
            type="button"
            onClick={() => setOpen(!open)}
          >
            {selectedCategory || (
              <div className={css.placeholder}>Product category</div>
            )}
            <Icon name={"arrow-down"} />
          </button>
          {open && (
            <ul className={css.list}>
              <li className={css.item} onClick={() => selectCategory("")}>
                ---
              </li>
              {categories.map((item) => (
                <li
                  className={css.item}
                  key={item}
                  onClick={() => selectCategory(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={css.nameWrapper}>
          <Input
            name={"name"}
            type={"text"}
            placeholder={"Search medicine"}
            register={register}
          />
          <div className={css.icon}>
            <Icon name={"search"} />
          </div>
        </div>
      </div>
      <Button className={"filter"}>
        <Icon name={"filter"} />
        Filter
      </Button>
    </form>
  );
};

export default ProductFilters;
