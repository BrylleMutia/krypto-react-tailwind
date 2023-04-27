import React from "react";
import styles, { layout } from "../styles";

const Footer = () => (
   <section>
      <div className="flex justify-between">
         <div>
            <h3 className={styles.heading3}>Krypto.</h3>
         </div>
         <div>
            <h2 className={`${styles.heading2} mb-[1.7rem]`}>Krypto</h2>
            <a href="#" className="hover:text-accent">
               <p className={styles.subtitle}>Home</p>
            </a>
            <a href="#" className="hover:text-accent">
               <p className={styles.subtitle}>About</p>
            </a>
            <a href="#" className="hover:text-accent">
               <p className={styles.subtitle}>Buy NFTs</p>
            </a>
            <a href="#" className="hover:text-accent">
               <p className={styles.subtitle}>Sell NFTs</p>
            </a>
         </div>
         <div>
            <h3 className={`${styles.heading2} mb-[1.7rem]`}>Market</h3>
            <a href="#" className="hover:text-accent">
               <p className={styles.subtitle}>Browse NFTs</p>
            </a>
            <a href="#" className="hover:text-accent">
               <p className={styles.subtitle}>Buy NFTs</p>
            </a>
            <a href="#" className="hover:text-accent">
               <p className={styles.subtitle}>Sell NFTs</p>
            </a>
         </div>
         <div>
            <h2 className={`${styles.heading2} mb-[1.7rem]`}>Contact</h2>
            <a href="#" className="hover:text-accent">
               <p className={styles.subtitle}>Email</p>
            </a>
            <a href="#" className="hover:text-accent">
               <p className={styles.subtitle}>LinkedIn</p>
            </a>
            <a href="#" className="hover:text-accent">
               <p className={styles.subtitle}>Instagram</p>
            </a>
            <a href="#" className="hover:text-accent">
               <p className={styles.subtitle}>Twitter</p>
            </a>
         </div>
         <div>
            <h4 className={styles.heading4}>Join Our Newsletter</h4>
            <form action="POST" method="_blank">
               <input type="text" />
               <input type="submit" value="Submit" />
            </form>
         </div>
      </div>
   </section>
);

export default Footer;
