import type { Metadata } from "next";
import ContactFeature from "./_features/Contact";

export const metadata: Metadata = {
  title: "İletişim | Isparta Gül Şehri Spa & Masaj Salonu",
  description:
    "Isparta'nın merkezinde yer alan salonumuzla iletişime geçin. ☎ +90 530 241 12 32 | Adres: Firdevs Cd. No: 8 D:14, Isparta | Profesyonel masaj ve spa hizmetleri için randevu alın.",
  openGraph: {
    title: "İletişim | Isparta Gül Şehri Spa & Masaj Salonu",
    description:
      "Isparta'nın merkezinde yer alan salonumuzla iletişime geçin. Profesyonel masaj ve spa hizmetleri için randevu alın.",
  },
};

const page = () => {
  return <ContactFeature />;
};

export default page;
