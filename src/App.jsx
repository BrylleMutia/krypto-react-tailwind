import React from "react";
import {
   Navbar,
   Hero,
   Featured,
   Testimonials,
   CTA,
   Footer,
} from "./components";
import "./App.css";
import styles from "./styles";
import Highlights from "./components/Highlights";
import { highlights } from "./constants";

import { initializeApp } from "firebase/app";
import {
   getFirestore,
   orderBy,
   getDocs,
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
   const navLinksRef = collection(db, "navlinks");
   const navLinksQuery = query(navLinksRef, orderBy("createdAt"), limit(10));
   const [navLinks, isDataLoading] = useCollectionData(navLinksQuery);
   console.log(navLinks, isDataLoading);

   return (
      <div className="w-full">
         <div className={`${styles.container} p-2 md:px-0 mx-auto`}>
            <Navbar />
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
               <Featured />
            </div>

            {highlights.map((highlight, index) => (
               <div className="mb-[7rem]" key={index}>
                  <Highlights key={index} {...highlight} />
               </div>
            ))}

            <div className="mb-[5rem]">
               <Testimonials />
            </div>
            <div className="mb-[12rem]" id="pricing">
               <CTA />
            </div>

            <div id="about">
               <Footer />
            </div>
         </div>
      </div>
   );
}

export default App;
