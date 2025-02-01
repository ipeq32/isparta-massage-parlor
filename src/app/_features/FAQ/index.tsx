"use client";
import React from "react";
import CustomAccordion from "@/app/_components/Accordion";

export default function FAQFeatures() {
  // Accordion’a gösterilecek verileri bir array olarak hazırlayabilirsiniz
  const accordionData = [
    {
      title: "Randevu almak için nasıl iletişim kurabilirim?",
      content: (
        <>
          Randevu almak için bizi telefon ile arayabilir veya Whatsapp üzerinden
          bizlere ulaşabilirsiniz.
          <br />
          İletişim bilgilerimiz web sitemizde bulunmaktadır.
        </>
      ),
    },
    {
      title: "Hangi masaj terapilerini sunuyorsunuz?",
      content: (
        <>
          Isparta Gül Şehri Spa & Masaj Salonu olarak birçok masaj terapisi
          seçeneği sunmaktayız.
          <br />
          Bunlar arasında Klasik Masaj, Lenf Masajı, Aromaterapi Masajı ve daha
          fazlası bulunmaktadır. Uzman terapistlerimiz, ihtiyaçlarınıza uygun en
          iyi terapileri önermek için size rehberlik edecektir.
        </>
      ),
    },
    {
      title: "Cilt bakımı ve spa terapileri arasındaki fark nedir?",
      content: (
        <>
          Cilt bakımı genellikle cilt sağlığını iyileştirmek ve korumak amacıyla
          yapılan uygulamalardır.
          <br />
          Spa terapileri ise genellikle hem fiziksel hem de zihinsel rahatlama
          üzerine odaklanır.
          <br />
          Ancak, birçok spa bakımı aynı zamanda cilt sağlığını da
          destekleyebilir.
        </>
      ),
    },
    {
      title: "Spa terapileri ne tür sağlık sorunlarına yardımcı olabilir?",
      content: (
        <>
          Spa terapileri, stres, kas ağrıları, uyku sorunları, cilt problemleri
          ve genel zindelik üzerinde olumlu etkilere sahiptir.
          <br />
          Masaj terapileri, kan dolaşımını artırarak kas gerginliğini
          azaltabilir ve stresi hafifletebilir.
        </>
      ),
    },
    {
      title: "Spa terapileri kaç seans sıklığıyla önerilir?",
      content: (
        <>
          Spa terapilerinin sıklığı, bireyin ihtiyaçlarına, sağlık durumuna ve
          hedeflerine bağlı olarak değişebilir.
          <br />
          Genellikle, rahatlatıcı etkiyi sürdürmek ve fayda görmek için haftada
          bir veya iki kez seanslar önerilir.
          <br />
          Ancak, kişiselleştirilmiş bir plan oluşturmak için terapistinizle
          görüşmek en iyisidir.
        </>
      ),
    },
    {
      title: "Buhar odası kullanmanın sağlık faydaları nelerdir?",
      content: (
        <>
          Buhar odası kullanımı, vücuttaki toksinleri atma, kas gerginliğini
          azaltma, kan dolaşımını artırma ve genel olarak rahatlama sağlama gibi
          birçok sağlık faydasına sahiptir.
          <br />
          Ayrıca, cildin temizlenmesine ve bağışıklık sisteminin güçlenmesine de
          katkıda bulunabilir. Ancak, bu tür uygulamalardan önce sağlık
          durumunuza uygun olduğundan emin olmak önemlidir.
        </>
      ),
    },
  ];

  return (
    <div className="container flex flex-col justify-center h-max py-[130px]">
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left ">
        Sıkça Sorulan Sorular
      </h1>

      <div>
        <CustomAccordion items={accordionData} defaultIndex={0} />
      </div>
    </div>
  );
}
