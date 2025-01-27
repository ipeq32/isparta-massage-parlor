"use client";

import Image from "next/image";
import Link from "next/link";
// import home from "./images/home.jpg";

const HomeFeature = () => {
  return (
    <div className="mx-auto w-full bg-slate-400">
      <div className="relative bg-slate-600">
        <div className="flex flex-row items-center justify-center">
          <Image
            className="object-contain w-[1920px] h-screen"
            src="/images/terapi.jpg"
            alt="Next.js logo"
            width={1920}
            height={1080}
            priority
          />
          <Image
            className="object-contain w-[1920px] h-screen"
            src="/images/terapi.jpg"
            alt="Next.js logo"
            width={1920}
            height={1080}
            priority
          />
          <Image
            className="object-cover w-[264px] h-screen"
            src="/images/terapi.jpg"
            alt="Next.js logo"
            width={500}
            height={1080}
            priority
          />
        </div>
        <div className="absolute mx-auto bottom-80 right-0 left-0 text-white font-bold text-5xl backdrop-blur-lg w-max h-auto px-2 py-3 rounded-md">
          Isparta Gül Şehri Spa & Masaj Salonu
        </div>
        {/* <div className="absolute inset-0 bg-gray-800"></div> */}
        <div className="absolute flex justify-center gap-6 bottom-20 right-0 left-0">
          <Link
            href={"tel:+905302411232"}
            className="flex w-44 h-12 items-center justify-center border rounded-md bg-opacity-50 text-white font-semibold hover:bg-gray-800 hover:border-gray-800 transition-all duration-150 ease-linear backdrop-blur-lg"
          >
            Hemen Arayın!
          </Link>
          <Link
            href="https://www.google.com/maps/dir//Rose+Town+Spa+Ve+Masaj+Salonu,+Ulusoy+Apartman%C4%B1,+Karaa%C4%9Fa%C3%A7,+Firdevs+Cd.+No:+8+D:14,+32100+Merkez%2FIsparta/@37.767995,30.565808,17z/data=!4m17!1m7!3m6!1s0x14c5b5908951f9b5:0x4fe881d30bfb59d!2sRose+Town+Spa+Ve+Masaj+Salonu!8m2!3d37.767995!4d30.565808!16s%2Fg%2F11p5jbj49x!4m8!1m0!1m5!1m1!1s0x14c5b5908951f9b5:0x4fe881d30bfb59d!2m2!1d30.565808!2d37.767995!3e2?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-36 h-12 items-center justify-center border rounded-md bg-opacity-50 text-white font-semibold hover:bg-gray-800 hover:border-gray-800 backdrop-blur-lg"
          >
            {/* Konum ikonu eklenecek */}
            Yol Tarifi Alın
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
