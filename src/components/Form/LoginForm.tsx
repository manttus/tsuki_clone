const LoginForm = () => {
  return (
    <div className="flex flex-col gap-5 mt-10 w-1/3 items-center ">
      <input
        className="rounded-xs border-1 px-3 leading-9 w-11/12 border-black focus:outline-none text-sm min-w-[345px] placeholder:font-thin placeholder:text-black tracking-wide"
        type="email"
        placeholder="Email"
      />
      <input
        className="rounded-xs border-1 px-3 leading-9 w-11/12 border-black focus:outline-none text-sm min-w-[345px] placeholder:font-thin placeholder:text-black tracking-wide"
        type="email"
        placeholder="Password"
      />
      <div className="flex w-11/12  justify-end text-[14px] cursor-pointer hover:text-primary min-w-[345px]">
        Forgot your password?
      </div>
      <div className="flex w-11/12  gap-4 justify-start items-center mt-5 min-w-[345px]">
        <button className="bg-primary text-sm px-4 py-2 font-bold text-white hover:bg-pink-200">
          Sign In
        </button>
        <a className="text-[14px] hover:text-primary cursor-pointer">
          Return to Store
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
