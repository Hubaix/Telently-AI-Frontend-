import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SocialMediaData } from "../Content";
import Model from "./Model";

const Footer = () => {
  const [isTermsAndConditions, setIsTermsAndConditions] = useState(false);

  const handleCloseTermsAndConditions = () => {
    setIsTermsAndConditions(false);
  };

  return (
    <>
      <div className="bg-[#f6f6f6] px-8 py-12">
        <div className="flex flex-col w-full gap-4 mx-auto max-w-screen-2xl">
          <div className="flex items-center justify-between">
            <Link href="/">
              {/* <img
              alt="Logo"
              loading="lazy"
              width="108"
              height="27"
              decoding="async"
              data-nimg="1"
              className="object-contain pointer-events-none"
              src="/images/landing/talently-logo-header-new.svg"
              style="color: transparent;"
            /> */}
              talently logo
            </Link>
            <div className="flex gap-2">
              {SocialMediaData &&
                SocialMediaData.map((item) => {
                  return (
                    <a
                      key={item.id}
                      className="w-[35px] h-[35px] inline-flex items-center justify-center p-1 border-2 rounded-full cursor-pointer hover:bg-slate-300"
                      target="_blank"
                      href={item.link}
                    >
                      {item.icon}
                    </a>
                  );
                })}
            </div>
          </div>
          <div className="mt-4 w-full border-[1px] border-[#E5E7EB] rounded-full"></div>
          <div className="flex justify-center pt-4 text-[#292D32] gap-5">
            <div className="text-sm">
              © Copyright 2024. All rights reserved.
            </div>
            <div>|</div>
            <div className="flex items-center gap-4 md:gap-8">
              <Link
                className="text-[#292D32] cursor-pointer hover:underline text-sm"
                to="/affiliate"
              >
                Affiliate Program
              </Link>

              <p
                className="text-[#292D32] cursor-pointer hover:underline text-sm"
                onClick={() => setIsTermsAndConditions(true)}
              >
                Privacy Policy
              </p>
              <p
                className="text-[#292D32] cursor-pointer hover:underline text-sm"
                onClick={() => setIsTermsAndConditions(true)}
              >
                Terms &amp; Conditions
              </p>
              <p className="text-[#292D32] cursor-pointer hover:underline text-sm">
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms And Conditions */}
      <Model
        isOpen={isTermsAndConditions}
        onClose={handleCloseTermsAndConditions}
      />
    </>
  );
};

export default Footer;
