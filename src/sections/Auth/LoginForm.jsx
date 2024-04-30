import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputField, ButtonVariant4 } from "../../components";

const Form = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form className="w-full max-w-[360px] mx-auto" data-hs-cf-bound="true">
      <div className="flex flex-col gap-[15px] mb-[26px]">
        <InputField
          label="Email"
          placeholder="Email"
          type="email"
          name="email"
          value={data.email}
          handleChange={handleChange}
        />

        <InputField
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          value={data.password}
          handleChange={handleChange}
        />
      </div>
      <ButtonVariant4 handler={handleSubmit}>Login</ButtonVariant4>
      <button
        id="click-login-with-google"
        type="button"
        className="flex min-h-[48px] w-full items-center justify-center rounded-[3px] bg-white py-2 px-7 leading-[100%] text-center text-sm capitalize font-medium text-[#000000] hover:bg-violet-[#F4EFF0] focus:bg-violet-[#F4EFF0] mb-0 disabled:bg-slate-200 disabled:text-slate-400 mt-[15px] border border-[#F4EFF0] transition-all"
      >
        <span className="flex-inline"></span>
        Sign in with Google
      </button>
      <div className="text-base text-[#445E7C] font-normal leading-[150%] text-center mt-[18px]">
        <Link to={'/auth/forget-password'}>
          <span className="text-[#1578ED] cursor-pointer underline hover:no-underline transition-all">
            Forgot password?
          </span>
        </Link>
      </div>
      <div className="text-base text-[#445E7C] font-normal leading-[150%] text-center mt-[18px]">
        Don't have an account?{" "}
        <button id="book-demo">
          <span className="text-[#1578ED] cursor-pointer underline hover:no-underline transition-all">
            Book a Demo
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;
