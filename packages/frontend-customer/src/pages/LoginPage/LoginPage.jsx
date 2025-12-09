import { AuthPageWrapper } from "shared-ui";

import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";

const LoginPage = () => {
  return (
    <AuthPageWrapper logo={<Logo name={"logo"} />}>
      <LoginForm />
    </AuthPageWrapper>
  );
};

export default LoginPage;
