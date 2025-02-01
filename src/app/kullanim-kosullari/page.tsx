import type { Metadata } from "next";
import ConditionsShowcaseFeature from "./_features/TermsOfConditions";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | Isparta Gül Şehri Spa & Masaj Salonu",
  description:
    "Isparta Gül Şehri Spa & Masaj Salonu kullanım koşulları ve hizmet şartları. Hizmetlerimizden yararlanırken uyulması gereken kurallar hakkında bilgi alın.",
  openGraph: {
    title: "Kullanım Koşulları | Isparta Gül Şehri Spa & Masaj Salonu",
    description:
      "Isparta Gül Şehri Spa & Masaj Salonu kullanım koşulları ve hizmet şartları hakkında detaylı bilgi alın.",
  },
};

const page = () => {
  return <ConditionsShowcaseFeature />;
};

export default page;
