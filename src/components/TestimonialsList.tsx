import React, { useState } from "react";
import { Blok, SBTestimonial } from "../types";
import TestimonialCard from "./TestimonialCard";
import ChevronRight from "../assets/chevron-right.svg";

interface Props {
  testimonials: Blok<SBTestimonial>[];
}

const TestimonialsList: React.FC<Props> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBulletClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleIndexIncrement = (value: number) => {
    if (currentIndex + value < 0) {
      setCurrentIndex(testimonials.length - 1);
      return;
    }
    setCurrentIndex((prevIndex) => (prevIndex + value) % testimonials.length);
  };

  return (
    <div className="w-full overflow-hidden flex flex-col gap-6">
      <div
        className="flex transition-transform duration-500 no-scrollbar flex flex-1 snap-x snap-mandatory [&>*]:snap-center"
        style={{
          transform: `translateX(calc(-100% * ${currentIndex}))`,
        }}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial._uid}
            title={testimonial.title}
            subtitle={testimonial.subtitle}
            image={testimonial.image}
            text={testimonial.text}
          />
        ))}
      </div>
      <div className="flex gap-4 items-center justify-center">
        <button
          className="text-brand-tertiary-900 flex flex-row gap-0 items-center"
          onClick={() => handleIndexIncrement(-1)}
        >
          <img className="size-6 -rotate-180" src={ChevronRight.src} alt="Anterior" />
          <span className="hidden sm:inline">Anterior</span>
        </button>
        <div className="flex gap-2 items-center justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-brand-secondary-900 w-8" : "bg-brand-tertiary-100 w-3"
              }`}
              onClick={() => handleBulletClick(index)}
            />
          ))}
        </div>
        <button
          className="text-brand-tertiary-900 flex flex-row gap-0 items-center"
          onClick={() => handleIndexIncrement(1)}
        >
          <span className="hidden sm:inline">Próximo</span>
          <img className="size-6" src={ChevronRight.src} alt="Próximo" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsList;
