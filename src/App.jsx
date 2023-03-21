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
      <div className="App">
         <div className="xl:m-w-[1280px] w-full md:p-10 p-2">
            <Navbar />
         </div>
         <Hero />
         <Featured />
         <Analytics />
         <Download />
         <Testimonials />
         <CTA />
         <Footer />
      </div>
   );
}

export default App;
