import type { Metadata } from "next";
import GalleryFeature from "./_features/Gallery";

export const metadata: Metadata = {
  title: "Galeri | Isparta Gül Şehri Spa & Masaj Salonu",
  description:
    "Isparta Gül Şehri Spa & Masaj Salonu'nun modern ve ferah ortamını keşfedin. Masaj odalarımız, spa alanlarımız ve dinlenme bölümlerimizin fotoğraflarına göz atın.",
  openGraph: {
    title: "Galeri | Isparta Gül Şehri Spa & Masaj Salonu",
    description:
      "Isparta Gül Şehri Spa & Masaj Salonu'nun modern ve ferah ortamını keşfedin. Masaj odalarımız ve spa alanlarımızı inceleyin.",
  },
};

const page = () => {
  return <GalleryFeature />;
};

export default page;
