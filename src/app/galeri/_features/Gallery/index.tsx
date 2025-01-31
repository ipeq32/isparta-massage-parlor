"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryContent = [
  [
    "/images/gallery/image00041-scaled.jpg",
    "/images/gallery/image00022-scaled.jpg",
    "/images/gallery/image00058-scaled.jpg",
  ],
  [
    "/images/gallery/image00049-scaled.jpg",
    "/images/gallery/image00053-scaled.jpg",
    "/images/gallery/image00055-scaled.jpg",
  ],
  [
    "/images/gallery/image00047-scaled.jpg",
    "/images/gallery/image00041-scaled.jpg",
    "/images/gallery/image00028-scaled.jpg",
  ],
  [
    "/images/gallery/image00027-scaled.jpg",
    "/images/gallery/image00024-scaled.jpg",
    "/images/gallery/image00022-scaled.jpg",
  ],
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const GalleryFeature = () => {
  return (
    <div className="min-h-screen">
      <figure className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/about-us.jpg"
          alt="About Us"
          className="object-cover opacity-60 aspect-video w-full"
          fill
        />
        <figcaption className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <motion.h1
            className="text-6xl font-bold text-center text-white"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Galerimiz
          </motion.h1>
        </figcaption>
      </figure>

      <motion.div
        className="container mx-auto p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryContent.map((column, colIndex) => (
            <div key={colIndex} className="grid gap-4">
              {column.map((url, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  variants={childVariants}
                  className="overflow-hidden"
                >
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={url}
                    alt=""
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GalleryFeature;
