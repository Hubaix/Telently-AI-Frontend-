import React from "react";
import { TickIcon } from "../assets/icons";
import { PriceBackground } from "../assets/images";
import { ButtonVariant1, ButtonVariant2 } from "../components";

const PricingCard = ({ card }) => {
  return (
    <div
      className={`flex flex-col gap-6  w-full md:w-auto border border-solid  rounded-xl p-6 ${
        card.title.toLowerCase() === "pro"
          ? "bg-[#111827] border-[#111827] relative"
          : "bg-[#fff] border-[#E5E7EB]"
      }`}
    >
      {card.title.toLowerCase() === "pro" && (
        <div className="absolute inset-0 pointer-events-none">
          <img
            alt="Glow Image"
            loading="lazy"
            width="247"
            height="346"
            decoding="async"
            data-nimg="1"
            className="object-contain pointer-events-none image-transparent"
            srcset={`${PriceBackground} 1x, ${PriceBackground} 2x`}
            src={PriceBackground}
          />
        </div>
      )}
      <div className="flex flex-col gap-6 pb-6 border-b border-solid border-[#E5E7EB]">
        <div
          className={`font-avenir font-medium text-base leading-[100%] ${
            card.title.toLowerCase() === "pro"
              ? "text-[#D1D5DB]"
              : "text-[#111827]"
          }`}
        >
          {card.title}
        </div>
        <div
          className={`font-onest font-bold text-[26px] md:text-[36px] leading-[100%] tracking-[-1.26px] ${
            card.title.toLowerCase() === "pro"
              ? "text-[#F9FAFB]"
              : "text-[#111827]"
          }`}
        >
          {card.title.toLowerCase() !== "enterprise" && "$"}
          {card.price}
          <span
            className={`text-sm font-avenir font-medium text-[#6b7280] leading-[100%] ml-1 ${
              card.title.toLowerCase() === "pro"
                ? "text-[#F9FAFB]"
                : "text-[#6b7280]"
            }`}
          >
            {card.title.toLowerCase() !== "enterprise" && "/mo"}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {card.features.map((feature) => {
          return (
            <div
              className={`relative pl-[22px] font-avenir text-sm font-normal text-[#445E7C] leading-[150%] ${
                card.title.toLowerCase() === "pro"
                  ? "text-[#F9FAFB]"
                  : "text-[#6b7280]"
              }`}
            >
              <span className="inline-flex absolute left-0 top-[2px]">
                <TickIcon />
              </span>
              {feature}
            </div>
          );
        })}
      </div>
      {card.title.toLowerCase() === "pro" ? (
        <a
          href="https://calendly.com/mtm75474/30-minutes-talently"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ButtonVariant2 />
        </a>
      ) : (
        <a
          href="https://calendly.com/mtm75474/30-minutes-talently"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ButtonVariant1 />
        </a>
      )}
    </div>
  );
};

export default PricingCard;
