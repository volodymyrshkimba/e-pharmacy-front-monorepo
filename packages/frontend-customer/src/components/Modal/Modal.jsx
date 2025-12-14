// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { closeModal } from "../../redux/modal/slice";
// import { selectModalData } from "../../redux/modal/selectors";

import ModalRegister from "./ModalRegister/ModalRegister";
import ModalLogin from "./ModalLogin/ModalLogin";

import { Icon } from "shared-ui";

import css from "./Modal.module.css";

const isOpen = false;
const modalType = "login";

const Modal = () => {
  //   const dispatch = useDispatch();
  //   const { isOpen, modalType, modalProps } = useSelector(selectModalData);

  //   useEffect(() => {
  //     const handleEsc = (e) => {
  //       if (e.key === "Escape") {
  //         dispatch(closeModal());
  //       }
  //     };

  //     window.addEventListener("keydown", handleEsc);

  //     return () => {
  //       window.removeEventListener("keydown", handleEsc);
  //     };
  //   }, [dispatch]);

  if (!isOpen) return null;

  const modalMap = {
    register: (
      <ModalRegister
      //   {...modalProps}
      //   onClose={() => dispatch(closeModal())}
      />
    ),
    login: (
      <ModalLogin
      //   {...modalProps}
      //   onClose={() => dispatch(closeModal())}
      />
    ),
  };

  return (
    <div
      className={css.overlay}
      onClick={() => {
        //   dispatch(closeModal());
      }}
    >
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={css.closeBtn}
          onClick={() => {
            //  dispatch(closeModal());
          }}
        >
          <Icon name={"x"} />
        </button>
        {modalMap[modalType] || null}
      </div>
    </div>
  );
};

export default Modal;
