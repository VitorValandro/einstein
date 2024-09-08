import React from "react";
import { SBTestimonial } from "../types";
import testimonialBackground from "../assets/testimonial-background.png";
import useScreenSize from "../hooks/useScreenSize";

interface Props extends SBTestimonial {}

const TestimonialCard: React.FC<Props> = ({ title, subtitle, image, text }) => {
  const { isMobile } = useScreenSize();

  if (isMobile) {
    return (
      <div
        className="min-w-full flex flex-row gap-2 items-center justify-center px-2"
        style={{
          backgroundImage: `url(${testimonialBackground.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-row gap-2">
            <img className="h-[64px]" src={image.filename} alt={image.alt} />
            <div className="flex flex-col gap-1">
              <h2 className="font-medium text-3xl md:text-5xl">{title}</h2>
              <h3 className="font-medium text-lg md:text-xl text-brand-tertiary-600">{subtitle}</h3>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <span className="text-7xl leading-0 text-brand-secondary-default">‟</span>
            <p className="mt-1 font-light italic text-lg text-justify">{text}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-w-full flex flex-row gap-2 items-center justify-center px-4"
      style={{
        backgroundImage: `url(${testimonialBackground.src})`,
        backgroundSize: "cover",
      }}
    >
      <img className="h-[256px] lg:h-[516px]" src={image.filename} alt={image.alt} />
      <div className="flex flex-col gap-2 w-full max-h-[300px]">
        <div className="flex flex-row gap-4">
          <span className="text-9xl leading-0 text-brand-secondary-default">‟</span>

          <div className="flex flex-col gap-2">
            <p className="mt-4 font-light italic text-lg text-justify">{text}</p>
            <div className="flex flex-row gap-2">
              <div className="w-10 h-[2px] bg-brand-tertiary-default mt-6" />
              <div className="flex flex-col gap-1">
                <h2 className="font-medium text-3xl md:text-5xl">{title}</h2>
                <h3 className="font-medium text-lg md:text-xl text-brand-tertiary-600">
                  {subtitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
