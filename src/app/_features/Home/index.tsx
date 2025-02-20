"use client";

import { reportConversion } from "@/lib/reportConversion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import home from "./images/home.jpg";

const HomeFeature = () => {
  return (
    <div className="mx-auto w-full bg-slate-400">
      <div className="relative bg-slate-600">
        <div className="flex flex-row items-center justify-center h-screen">
          <motion.div
            animate={{
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 5,
              times: [0, 0.2, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0,
            }}
            className="absolute w-full h-screen"
          >
            {[1, 2, 3, 4, 5].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={`absolute w-full h-screen ${index === 1 ? "block" : "hidden"}`}
              >
                <Image
                  className="object-cover w-full h-screen"
                  src={`/images/${index}.jpg`}
                  alt={`Slide ${index}`}
                  width={1920}
                  height={1080}
                  priority
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute mx-auto bottom-80 right-0 left-0 text-white text-center font-bold text-3xl md:text-4xl lg:text-5xl backdrop-blur-lg w-[90%] md:w-[67%] h-auto px-2 py-3 rounded-md">
          Isparta Gül Şehri Spa & Masaj Salonu
        </div>
        {/* <div className="absolute inset-0 bg-gray-800"></div> */}
        <div className="absolute flex justify-center gap-6 bottom-20 right-0 left-0">
          <Link
            href={"tel:905302411232"}
            onClick={(e) => {
              e.preventDefault();
              reportConversion("tel:905302411232");
            }}
            className="flex w-48 h-12 items-center justify-center border rounded-md bg-opacity-50 text-white font-semibold hover:bg-[#522f6a] hover:border-[#522f6a] transition-all duration-150 ease-linear backdrop-blur-lg"
          >
            {/* Arama ikonu eklenecek */}
            +90 (530) 241 12 32
          </Link>
          <Link
            href="https://www.google.com/maps/dir//Rose+Town+Spa+Ve+Masaj+Salonu,+Ulusoy+Apartman%C4%B1,+Karaa%C4%9Fa%C3%A7,+Firdevs+Cd.+No:+8+D:14,+32100+Merkez%2FIsparta/@37.767995,30.565808,17z/data=!4m17!1m7!3m6!1s0x14c5b5908951f9b5:0x4fe881d30bfb59d!2sRose+Town+Spa+Ve+Masaj+Salonu!8m2!3d37.767995!4d30.565808!16s%2Fg%2F11p5jbj49x!4m8!1m0!1m5!1m1!1s0x14c5b5908951f9b5:0x4fe881d30bfb59d!2m2!1d30.565808!2d37.767995!3e2?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-48 h-12 items-center justify-center border rounded-md bg-opacity-50 text-white font-semibold hover:bg-[#522f6a] hover:border-[#522f6a] transition-all duration-150 ease-linear backdrop-blur-lg"
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
