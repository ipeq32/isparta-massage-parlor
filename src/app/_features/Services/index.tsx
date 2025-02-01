"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "Aroma Terapi",
    description: "Doğal uçucu yağlar ile rahatlatıcı masaj deneyimi.",
    imageUrl: "/images/massage.jpg",
  },
  {
    title: "Klasik Masaj",
    description: "Kan dolaşımını düzenleyerek kas ağrılarını azaltır.",
    imageUrl: "/images/massage.jpg",
  },
  {
    title: "Sıcak Taş Masajı",
    description: "Isıtılmış volkanik taşlarla bedeninizi sıcacık rahatlatın.",
    imageUrl: "/images/massage.jpg",
  },
  {
    title: "Spor Masajı",
    description: "Yoğun antrenman sonrası kas yorgunluğunu atmak için birebir.",
    imageUrl: "/images/massage.jpg",
  },
  {
    title: "Spor Masajı",
    description: "Yoğun antrenman sonrası kas yorgunluğunu atmak için birebir.",
    imageUrl: "/images/massage.jpg",
  },
  // İstediğiniz kadar hizmet ekleyebilirsiniz...
];

export default function MassageServices() {
  return (
    <section className="flex flex-col justify-center py-20 h-max">
      <div className="container mx-auto">
        <header className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4 md:gap-2">
          <h2 className="text-3xl font-bold text-left">Hizmetlerimiz</h2>
        </header>
        <article className="flex flex-wrap space-y-4 mx-auto justify-center items-end mt-2 grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:space-y-4">
          {servicesData.length === 0 ? (
            <Icon
              icon="line-md:loading-twotone-loop"
              className="w-40 h-40 text-blue-500"
            />
          ) : (
            servicesData.map((service, index) => (
              <div
                key={index}
                className="w-80 md:w-60 h-[470px] md:h-96 flex-shrink-0 bg-white rounded-lg shadow-2xl p-4"
              >
                <div className="relative w-full h-[340px] md:h-60 mb-3">
                  <Image
                    src={service.imageUrl}
                    alt={`${service.title} - Isparta Gül Şehri Spa & Masaj Salonu`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700 text-wrap">
                  {service.description}
                </p>
              </div>
            ))
          )}
        </article>
      </div>
    </section>
  );
}
