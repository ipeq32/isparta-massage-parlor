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
    title: "Klasik Masaj",
    description: "Temel masaj tekniği, kas gerginliğini azaltır.",
    imageUrl: "/images/services/isparta-klasik-masaj.jpg",
  },
  {
    title: "Medikal Masaj",
    description: "Ağrı ve tedavi odaklı, hedefli masaj yöntemleri.",
    imageUrl: "/images/services/isparta-medikal-masaj.jpg",
  },
  {
    title: "Lenf Masajı",
    description: "Toksin atımını hızlandırır, ödemi azaltır.",
    imageUrl: "/images/services/isparta-lenf-masaji.jpg",
  },
  {
    title: "Mix Masaj",
    description: "Farklı teknikleri birleştirerek çok yönlü rahatlama sağlar.",
    imageUrl: "/images/services/isparta-mix-masaj.jpg",
  },
  {
    title: "Bali Relax Masaj",
    description: "Hafif dokunuş ve aromalarla sakinleştirici bir deneyim.",
    imageUrl: "/images/services/isparta-bali-relax-masaj.jpg",
  },
  {
    title: "Aroma Terapi Masaj",
    description: "Uçucu yağlarla ruh ve bedeni dinginleştirir.",
    imageUrl: "/images/services/isparta-aroma-terapi-masaj.jpg",
  },
  {
    title: "Sultan Masajı",
    description: "Lüks ve kapsamlı dokunuşlarla özel bir rahatlama sunar.",
    imageUrl: "/images/services/isparta-sultan-masaji.jpg",
  },
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
                className="w-80 md:w-60 h-[470px] md:h-96 flex-shrink-0 bg-white rounded-lg shadow-2xl shadow-[#6a4285e5] p-4"
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
