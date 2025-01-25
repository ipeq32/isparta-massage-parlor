"use client";

import Image from "next/image";
// import home from "./images/home.jpg";

const HomeFeature = () => {
  return (
    <div className="container">
      <div className="relative">
        {/* <Image src={home} alt="Home Feature" className="rounded-lg" /> */}
        <Image
          src="/images/home.jpg"
          alt="Home Feature"
          className="container mx-auto"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gray-800"></div>
      </div>
    </div>
  );
};

export default HomeFeature;
