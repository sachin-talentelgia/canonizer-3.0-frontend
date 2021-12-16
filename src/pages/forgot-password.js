import ForgotPassword from "../components/pages/forgotPassword";

import GetStartedLayout from "../hoc/getStartedLayout";

const ForgotPasswordPage = () => {
  const meta = {
    title: "forgot password",
    description: "forgot canaonizer login password ",
    route: "forgot-password",
  };
  return (
    <GetStartedLayout meta={meta}>
      <ForgotPassword />
    </GetStartedLayout>
  );
};

export default ForgotPasswordPage;