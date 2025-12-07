import { Link } from "react-router-dom";

import AuthForm from "../../components/AuthForm/AuthForm";
import SiteLogo from "../../components/SiteLogo/SiteLogo";

import css from "./AuthPage.module.css";

const AuthPage = ({ login }) => {
  return (
    <div className={css.pageContainer}>
      <SiteLogo />
      <h1 className={css.title}>
        Your medication, delivered Say goodbye
        <br />
        to all <span className={css.titleAccent}>your healthcare</span> worries
        with us
      </h1>
      <AuthForm isLogin={login} />
      <Link className={css.loginLink} to={login ? "/register" : "/login"}>
        {login ? "Don't have an account?" : "Already have an account?"}
      </Link>
    </div>
  );
};

export default AuthPage;
