"use client";

import Image from "next/image";
// import home from "./images/home.jpg";

const HomeFeature = () => {
  return (
    <div className="mx-auto w-full bg-slate-400">
      <div className="relative bg-slate-600">
        <Image
          className="object-cover w-[1920px] h-screen -mt-32"
          src="/images/home.jpg"
          alt="Next.js logo"
          width={1920}
          height={1080}
          priority
        />
        {/* <div className="absolute inset-0 bg-gray-800"></div> */}
      </div>
    </div>
  );
};

export default HomeFeature;
