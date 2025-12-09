import { AuthPageWrapper } from "shared-ui";

import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Logo from "../../components/Logo/Logo";

const RegisterPage = () => {
  return (
    <AuthPageWrapper logo={<Logo name={"logo"} />}>
      <RegisterForm />
    </AuthPageWrapper>
  );
};

export default RegisterPage;
