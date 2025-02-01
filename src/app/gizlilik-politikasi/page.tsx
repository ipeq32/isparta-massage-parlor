import type { Metadata } from "next";
import PrivacyPolicyHighlightFeature from "./_features/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Isparta Gül Şehri Spa & Masaj Salonu",
  description:
    "Isparta Gül Şehri Spa & Masaj Salonu gizlilik politikası. Kişisel verilerinizin korunması ve kullanımı hakkında detaylı bilgi alın.",
  openGraph: {
    title: "Gizlilik Politikası | Isparta Gül Şehri Spa & Masaj Salonu",
    description:
      "Isparta Gül Şehri Spa & Masaj Salonu gizlilik politikası. Kişisel verilerinizin korunması hakkında bilgi alın.",
  },
};

const page = () => {
  return <PrivacyPolicyHighlightFeature />;
};

export default page;
