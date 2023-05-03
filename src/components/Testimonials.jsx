import React from "react";
import { testimonials } from "../constants";
import styles, { layout } from "../styles";

// temp images fix
import { client1, client2, client3 } from "../assets";

const TestimonialCard = ({ imgSrc, name, feedback }) => (
   <div className="flex flex-col items-center mt-[9rem] gap-[1.3rem] p-[2.5rem] basis-1/3 bg-featured rounded-2xl relative max-w-[24rem] min-w-[20rem]">
      <img
         src={`../src/assets/${imgSrc}`}
         alt="testimonial"
         className="rounded-[50%] absolute -top-[8rem]"
      />
      <h4 className={`${styles.heading4} mt-[9rem]`}>{name}</h4>
      <p className={`${styles.heading2} font-light`}>{feedback}</p>
   </div>
);

const Testimonials = () => (
   <section className="text-center">
      <h2 className={`${styles.heading2} text-accent mb-7`}>Testimonials</h2>
      <h1 className={`${styles.heading1} mb-[5.5rem]`}>
         Read What Others <br /> Have to Say
      </h1>
      <div className={`${layout.flexCenter} flex-wrap gap-[1rem]`}>
         {/* {testimonials.map((testimonial, index) => (
            <TestimonialCard {...testimonial} key={index} />
         ))} */}

         <div className="flex flex-col items-center mt-[9rem] gap-[1.3rem] p-[2.5rem] basis-1/3 bg-featured rounded-2xl relative max-w-[24rem] min-w-[20rem]">
            <img
               src={client1}
               alt="testimonial"
               className="rounded-[50%] absolute -top-[8rem]"
            />
            <h4 className={`${styles.heading4} mt-[9rem]`}>Carol Danvers</h4>
            <p className={`${styles.heading2} font-light`}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
               ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
         </div>
         <div className="flex flex-col items-center mt-[9rem] gap-[1.3rem] p-[2.5rem] basis-1/3 bg-featured rounded-2xl relative max-w-[24rem] min-w-[20rem]">
            <img
               src={client2}
               alt="testimonial"
               className="rounded-[50%] absolute -top-[8rem]"
            />
            <h4 className={`${styles.heading4} mt-[9rem]`}>Tony Stark</h4>
            <p className={`${styles.heading2} font-light`}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
               ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
         </div>
         <div className="flex flex-col items-center mt-[9rem] gap-[1.3rem] p-[2.5rem] basis-1/3 bg-featured rounded-2xl relative max-w-[24rem] min-w-[20rem]">
            <img
               src={client3}
               alt="testimonial"
               className="rounded-[50%] absolute -top-[8rem]"
            />
            <h4 className={`${styles.heading4} mt-[9rem]`}>Nat Romanoff</h4>
            <p className={`${styles.heading2} font-light`}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
               ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
         </div>
      </div>
   </section>
);

export default Testimonials;
