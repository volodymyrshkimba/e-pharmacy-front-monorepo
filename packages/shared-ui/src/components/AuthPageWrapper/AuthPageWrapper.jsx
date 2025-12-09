import css from "./AuthPageWrapper.module.css";

const AuthPageWrapper = ({ children, logo }) => {
  return (
    <div className={css.pageContainer}>
      {logo}
      <div className={css.titleFormWrapper}>
        <h1 className={css.title}>
          Your medication, delivered Say goodbye
          <br />
          to all <span className={css.titleAccent}>your healthcare</span>{" "}
          worries with us
        </h1>
        {children}
      </div>
    </div>
  );
};

export default AuthPageWrapper;
