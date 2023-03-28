import React from "react";
import {
   Navbar,
   Hero,
   Featured,
   Analytics,
   Download,
   Testimonials,
   CTA,
   Footer,
} from "./components";
import "./App.css";

function App() {
   return (
      <div className="w-full">
         <div className="xl:max-w-[1280px] p-2 md:px-0 mx-auto">
            <Navbar />
         </div>

         <div className="w-full sm:px-[5rem] px-[2rem]">
            <div className="xl:max-w-[1280px] w-full mx-auto">
               <Hero />
            </div>
         </div>

         <div className="xl:max-w-[1280px] w-full">
            <Featured />
            <Analytics />
            <Download />
            <Testimonials />
            <CTA />
            <Footer />
         </div>
      </div>
   );
}

export default App;
