const styles = {
   container: "xl:max-w-[1280px] w-full",

   heading1: "font-outfit font-black text-h1",
   heading2: "font-outfit font-medium uppercase text-sm tracking-wider",
   heading3: "font-outfit text-[1.3em] font-semibold uppercase tracking-wider",
   heading4: "font-outfit text-[1.2rem] font-semibold uppercase tracking-wider",
   subtitle: "font-outfit text-[1rem] font-light",
};

export const layout = {
   flexCenter: "flex justify-center items-center",
   flexStart: "flex justify-center items-start",
   section: `flex md:flex-row flex-col ${styles.paddingY}`,
   sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

   sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
   sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

   sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
