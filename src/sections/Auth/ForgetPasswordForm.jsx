import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputField, ButtonVariant4 } from "../../components";

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(email);
  };

  return (
    <form className="w-full max-w-[360px] mx-auto" data-hs-cf-bound="true">
      <div className="flex flex-col gap-[15px] mb-[26px]">
        <InputField
          label="Email"
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <ButtonVariant4 handler={handleSubmit}>
        Request Password Reset
      </ButtonVariant4>

      <div className="text-base text-[#445E7C] font-normal leading-[150%] text-center mt-[18px]">
        <Link to={"/auth/login"}>
          <span className="text-[#1578ED] cursor-pointer underline hover:no-underline transition-all">
            Back to Login
          </span>
        </Link>
      </div>
    </form>
  );
};

export default ForgetPasswordForm;
