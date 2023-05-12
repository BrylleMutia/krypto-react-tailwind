import React from "react";
import {
   Navbar,
   Hero,
   Featured,
   Testimonials,
   CTA,
   Footer,
   Highlights,
} from "./components";
import "./App.css";
import styles from "./styles";

import { initializeApp } from "firebase/app";
import {
   getFirestore,
   orderBy,
   collection,
   query,
   limit,
} from "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

// firebase config
const firebaseApp = initializeApp({
   apiKey: "AIzaSyAvkStRRBUyMOquTxv39w5wdy1cwRd47xk",
   authDomain: "krypto-4cbc5.firebaseapp.com",
   projectId: "krypto-4cbc5",
   storageBucket: "krypto-4cbc5.appspot.com",
   messagingSenderId: "264261081717",
   appId: "1:264261081717:web:8f4d42ab732661af04763c",
   measurementId: "G-V4530FVPTH",
});

const db = getFirestore(firebaseApp);

function App() {
   // navlinks for navbar
   const navLinksRef = collection(db, "navlinks");
   const navLinksQuery = query(navLinksRef, orderBy("createdAt"), limit(10));
   const [navLinks, isNavLinksLoading] = useCollectionData(navLinksQuery);
   console.log(navLinks, isNavLinksLoading);

   // featured companies
   const featuredRef = collection(db, "featured");
   const featuredQuery = query(featuredRef, limit(5));
   const [featuredComps, isFeaturedCompsLoading] =
      useCollectionData(featuredQuery);
   console.log(featuredComps, isFeaturedCompsLoading);

   // highlights
   const highlightsRef = collection(db, "highlights");
   const highlightsQuery = query(highlightsRef);
   const [highlights, isHighlightsLoading] = useCollectionData(highlightsQuery);
   console.log(highlights, isHighlightsLoading);

   // testimonials
   const testimonialsRef = collection(db, "testimonials");
   const testimonialsQuery = query(testimonialsRef, limit(3));
   const [testimonials, isTestimonialsLoading] =
      useCollectionData(testimonialsQuery);
   console.log(testimonials, isTestimonialsLoading);

   return (
      <div className="w-full">
         <div className={`${styles.container} p-2 md:px-0 mx-auto`}>
            <Navbar links={isNavLinksLoading ? [] : navLinks} />
         </div>

         <div className="w-full">
            <div
               className={`${styles.container} mx-auto px-[2rem] sm:px-10 mb-20`}
            >
               <Hero />
            </div>
         </div>

         <div
            className={`${styles.container} mx-auto px-[2rem] sm:px-10 mb-20`}
         >
            <div className="mb-[7rem]">
               <Featured
                  companies={isFeaturedCompsLoading ? [] : featuredComps}
               />
            </div>

            <div id="nfts">
               {highlights?.map((highlight, index) => (
                  <div className="mb-[7rem]" key={index}>
                     <Highlights key={index} {...highlight} />
                  </div>
               ))}
            </div>

            <div id="about" className="mb-[5rem]">
               <Testimonials
                  testimonialsData={isTestimonialsLoading ? [] : testimonials}
               />
            </div>
            <div className="mb-[12rem]" id="pricing">
               <CTA />
            </div>

            <div id="contact">
               <Footer />
            </div>
         </div>
      </div>
   );
}

export default App;
