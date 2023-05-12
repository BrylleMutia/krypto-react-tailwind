import React from "react";
import { testimonials } from "../constants";
import styles, { layout } from "../styles";

const TestimonialCard = ({ imgSrc, name, feedback }) => (
   <div className="flex flex-col items-center mt-[9rem] gap-[1.3rem] p-[2.5rem] basis-1/3 bg-featured rounded-2xl relative max-w-[24rem] min-w-[20rem]">
      <img
         src={imgSrc}
         alt="testimonial"
         className="rounded-[50%] absolute -top-[8rem]"
      />
      <h4 className={`${styles.heading4} mt-[9rem]`}>{name}</h4>
      <p className={`${styles.heading2} font-light`}>{feedback}</p>
   </div>
);

const Testimonials = ({ testimonialsData }) => (
   <section className="text-center">
      <h2 className={`${styles.heading2} text-accent mb-7`}>Testimonials</h2>
      <h1 className={`${styles.heading1} mb-[5.5rem]`}>
         Read What Others <br /> Have to Say
      </h1>
      <div className={`${layout.flexCenter} flex-wrap gap-[1rem]`}>
         {testimonialsData.map((testimonial, index) => (
            <TestimonialCard {...testimonial} key={index} />
         ))}
      </div>
   </section>
);

export default Testimonials;
