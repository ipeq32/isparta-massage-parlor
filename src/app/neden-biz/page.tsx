import type { Metadata } from "next";
import WhyUsFeature from "./_features/WhyUs";

export const metadata: Metadata = {
  title: "Neden Biz? | Isparta'nın En İyi Masaj ve Spa Merkezi",
  description:
    "Profesyonel ekibimiz, steril ortamımız ve kaliteli hizmet anlayışımızla Isparta'nın önde gelen masaj ve spa merkeziyiz. Sertifikalı terapistlerimiz ve modern tekniklerimizle fark yaratıyoruz.",
  openGraph: {
    title: "Neden Biz? | Isparta'nın En İyi Masaj ve Spa Merkezi",
    description:
      "Profesyonel ekibimiz, steril ortamımız ve kaliteli hizmet anlayışımızla Isparta'nın önde gelen masaj ve spa merkeziyiz.",
  },
};

const page = () => {
  return <WhyUsFeature />;
};

export default page;
