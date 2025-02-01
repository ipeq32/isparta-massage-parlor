import type { Metadata } from "next";
import AboutUsFeature from "./_features/AboutUs";

export const metadata: Metadata = {
  title: "Hakkımızda | Isparta'nın Güvenilir Masaj ve Spa Merkezi",
  description:
    "2010'dan beri Isparta'da profesyonel masaj ve spa hizmetleri sunuyoruz. Deneyimli kadromuz ve steril ortamımızla sizlere en iyi hizmeti veriyoruz.",
  openGraph: {
    title: "Hakkımızda | Isparta'nın Güvenilir Masaj ve Spa Merkezi",
    description:
      "2010'dan beri Isparta'da profesyonel masaj ve spa hizmetleri sunuyoruz. Deneyimli kadromuz ve steril ortamımızla sizlere en iyi hizmeti veriyoruz.",
  },
};

const page = () => {
  return <AboutUsFeature />;
};

export default page;
