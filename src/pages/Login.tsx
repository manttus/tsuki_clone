import LoginForm from "../components/Form/LoginForm";

const Login = () => {
  return (
    <div className="flex gap-2 flex-col justify-center lg:pt-7 md:pt-7 items-center lg:font-medium font-light mt-5 tracking-wide lg:text-[27px] text-[24px] ">
      <h1>Login</h1>
      <p className="font-normal text-sm ">
        Don't have an account?{" "}
        <a className="cursor-pointer hover:text-primary">Sign up here.</a>
      </p>
      <LoginForm />
    </div>
  );
};

export default Login;
