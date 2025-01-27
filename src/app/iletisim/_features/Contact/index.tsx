"use client";

import { motion } from "framer-motion";
import FormComponent from "../../_components/Form";

const ContactFeature = () => {
  return (
    <div className="min-h-screen">
      <figure className="relative h-[500px] overflow-hidden">
        <img
          src="https://letsrelaxspa.com/wp-content/uploads/2017/08/banner1-2-e1529655312163.jpg"
          alt="About Us"
          className="object-cover opacity-60 aspect-video w-full"
        />
        <figcaption className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <motion.h1
            className="text-6xl font-bold text-center text-white"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            İletişim
          </motion.h1>
        </figcaption>
      </figure>
      <section className="container flex flex-col gap-8 p-8">
        <FormComponent />
      </section>
    </div>
  );
};

export default ContactFeature;
