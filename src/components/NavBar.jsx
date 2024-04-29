import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../assets/icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 inset-x-0 py-10 sm:py-14 z-[2]">
      <div className="w-full max-w-[1386px] mx-auto px-8">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="w-full flex text-white max-h-[32px] max-w-[150px] flex-shrink-0 items-center justify-start sm:max-h-[34px] sm:max-w-[159px] no-underline hover:no-underline focus:no-underline"
          >
            {/* <img
              alt="Logo"
              loading="lazy"
              width="118"
              height="27"
              decoding="async"
              data-nimg="1"
              className="image-transparent"
              src=""
            /> */}
            Telently
          </Link>
          <button
            className="border-0 bg-transparent text-white hover:opacity-80 no-underline hover:no-underline focus:no-underline focus:bg-transparent focus:outline-none lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>
          <div className="hidden items-center justify-center lg:flex lg:flex-row gap-8 lg:gap-[50px]">
            <div className="cursor-pointer font-avenir font-normal text-white hover:opacity-80 no-underline hover:no-underline focus:no-underline text-sm transition-all">
              Pricing
            </div>
            <div className="cursor-pointer font-avenir font-normal text-white hover:opacity-80 no-underline hover:no-underline focus:no-underline text-sm transition-all">
              Features
            </div>
          </div>
          <div className="items-center justify-end hidden gap-5 lg:flex">
            <button
              id="book-demo"
              className="font-avenir font-normal text-white hover:opacity-80 no-underline hover:no-underline focus:no-underline text-sm transition-all"
            >
              Book a Demo
            </button>
            <Link
              to={"/login"}
              className="flex flex-shrink-0 items-center justify-center text-sm font-avenir font-normal text-white px-2 py-2 min-w-[100px] min-h-[36px] border border-solid border-[#E5E7EB] rounded-[12px] transition-all bg-transparent hover:text-white focus:text-white hover:opacity-80 focus:opacity-80"
            >
              Sign In
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="flex sm:hidden absolute bottom-auto left-0 right-0 top-[91px] z-30 flex-col items-center justify-center gap-12 bg-white p-8 shadow-sm shadow-slate-100 lg:hidden">
            <div className="flex flex-col items-center justify-center text-left gap-7">
              <div className="cursor-pointer font-avenir font-normal text-[#445E7C] hover:text-[#7A3FF3] no-underline hover:no-underline focus:no-underline text-sm transition-all">
                Pricing
              </div>
              <div className="cursor-pointer font-avenir font-normal text-[#445E7C] hover:text-[#7A3FF3] no-underline hover:no-underline focus:no-underline text-sm transition-all">
                Features
              </div>
              <button
                id="book-demo"
                className="font-avenir font-normal text-[#445E7C] hover:text-[#7A3FF3] no-underline hover:no-underline focus:no-underline text-sm transition-all"
              >
                Book a Demo
              </button>
              <Link
                to={"/login"}
                className="flex flex-shrink-0 items-center justify-center text-sm font-avenir font-normal text-[#445E7C] px-2 py-2 min-w-[100px] min-h-[36px] border border-solid border-[#E5E7EB] rounded-[12px] transition-all bg-transparent hover:text-white focus:text-white hover:bg-[#445E7C] focus:bg-[#445E7C]"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
