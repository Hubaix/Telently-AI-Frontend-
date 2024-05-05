import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BlackLogo } from "../assets/images";

const Login = () => {
  return (
    <div class="flex">
      <div class="flex w-full min-h-screen font-onest">
        <div class="flex flex-col flex-grow px-8 lg:px-16 py-[34px] sm:pb-9 laptopSm:h-screen laptopSm:overflow-y-auto">
          <div class="flex flex-col">
            <Link to={'/'}
              class="w-full flex max-h-[32px] max-w-[150px] flex-shrink-0 items-center justify-start sm:max-h-[34px] sm:max-w-[159px] no-underline hover:no-underline focus:no-underline"
            >
              <img
                alt=""
                loading="lazy"
                width="120"
                height="50"
                decoding="async"
                data-nimg="1"
                className="image-transparent"
                src={BlackLogo}
              />
            </Link>
            <Outlet />
          </div>
        </div>
        <div class="flex-grow hidden laptopSm:flex bg-signup bg-no-repeat bg-cover w-full max-w-[422px]"></div>
      </div>
    </div>
  );
};

export default Login;
