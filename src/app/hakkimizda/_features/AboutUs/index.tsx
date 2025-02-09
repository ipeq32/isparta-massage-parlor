"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const paragraphs = [
  "Isparta’nın adını duyduğumuzda, çoğumuzun aklına mis kokulu güller ve bu güllerden elde edilen özel esanslar gelir. İşte Gül Şehri Masaj Salonu, bu gül diyarının dokusunu masaj sanatının incelikleriyle harmanlayarak sizlere bambaşka bir rahatlama deneyimi sunmak için kuruldu. Şehrin dingin atmosferinde, doğal gül kokusunun insan ruhuna ve bedenine verdiği huzuru, profesyonel masaj hizmetlerimizle bütünleştirmeye özen gösteriyoruz.",
  "Salonumuza adım attığınız anda, gül motifleriyle süslenmiş sade ama sıcak bir dekorasyonla karşılanırsınız. Geniş bekleme alanımız ve masaj odalarımız, özel aydınlatma ve pastel tonlardaki renk tercihleriyle zihninizi günlük telaşlardan uzaklaştırır. Daha ilk anda kendinizi güvende ve rahat hissedebilmeniz, hizmet anlayışımızın temelini oluşturur.",
  "Masaj çeşitlerimizi belirlerken, hem geleneksel hem de modern teknikleri bir araya getirmeye özen gösterdik. İlk olarak Klasik Masaj, kas gerginliğini azaltıp kan dolaşımını iyileştirmek için ideal bir başlangıçtır. Uzman terapistlerimiz, sürekli aynı pozisyonda çalışmaktan doğan kas ağrılarınızı hafifletmek veya basitçe rahatlamak istediğinizde bu tekniği önerir. Daha derin ve hedefe yönelik bir uygulama arayan misafirlerimiz içinse Medical Masaj devreye girer; sırt, boyun veya bel gibi belirli bölgelerdeki ağrı ve tutuklukları hafifletmeye odaklanır.",
  "Vücudun doğal savunma mekanizması olan lenf dolaşımını destekleyici Lenf Masajı, ödem atma ve bağışıklık sistemini güçlendirmede oldukça etkilidir. Karışık ve bütüncül bir terapi arıyorsanız, çeşitli masaj tekniklerinin sentezi olan Mix Masaj tam size göredir. Yoğun bir iş temposu veya yorgunluk söz konusu olduğunda, farklı bölgelerde farklı yöntemler uygulayarak çok yönlü bir rahatlama elde edersiniz.",
  "Daha egzotik ve yumuşak dokunuşlar arayan konuklarımız için Bali Relax Masaj ve Aroma Terapi Masaj seçenekleri bulunur. Bali Relax Masaj, okyanus esintisini andıran uzun, akıcı vuruşlarla bedeni gevşetirken, uçucu yağlar içeren Aroma Terapi Masaj ise gül esansı başta olmak üzere doğanın kokularıyla zihni sakinleştirir. Isparta’nın gül kokusuyla bütünleşen bu masajlar, kelimenin tam anlamıyla duyularınıza hitap eder.",
  "Kendinizi çok daha özel ve “krallara layık” hissetmek istediğinizdeyse, Sultan Masajı deneyimini öneriyoruz. Sıcak kompresler, özenli dokunuşlar ve aromatik yağlarla donatılmış bu uygulama, bedensel yenilenmenin yanı sıra ruhsal bir ferahlama sunar. Her seanstan sonra, “gerçekten değerli hissettim” diyen misafirlerimizin yüzündeki memnuniyet, bizler için en büyük mutluluk kaynağıdır.",
  "Hijyen, güler yüzlü hizmet ve kişiye özel yaklaşım, Gül Şehri Masaj Salonu’nun ayrılmaz parçalarıdır. Her masaj seansı öncesinde ve sonrasında kullanılan malzemeleri titizlikle temizler, steril alanlarda çalışırız. Çalışanlarımızın deneyimi ve sürekli eğitim anlayışı, her seferinde beklentilerin üzerinde sonuçlar elde etmemize yardımcı olur. İsterseniz gül bahçelerinden ilham alan kısa bir mola, isterseniz tıkanan kaslarınızı rahatlatacak özel bir terapi arayın biz buradayız.",
  "Gelin, Isparta’nın gül kokulu sokaklarından geçip salonumuzda kendinizi şımartın. Gül Şehri Masaj Salonu kapısından içeri adımınızı attığınız andan itibaren, yalnızca bedensel değil, ruhsal anlamda da yepyeni bir yolculuğa davet edildiğinizi hissedeceksiniz. Kendinize zaman ayırın, stresinizi geride bırakın ve gül esanslarının büyülü dokunuşlarıyla tazelenmenin tadını çıkarın. Bizim için en büyük başarı, salonumuzdan her çıkışınızda yüzünüzdeki huzurlu tebessümü görmektir.",
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const AboutUsFeature = () => {
  return (
    <div className="min-h-screen">
      <figure className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/about-us.jpg"
          alt="About Us"
          className="object-cover opacity-60 aspect-video w-full"
          fill
        />
        <figcaption className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <motion.h1
            className="text-6xl font-bold text-center text-white"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hakkımızda
          </motion.h1>
        </figcaption>
      </figure>
      <motion.div
        className="container flex flex-col gap-8 p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {paragraphs.map((text, index) => (
          <motion.p
            key={index}
            variants={childVariants}
            className={index === 0 ? "indent-8" : ""}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutUsFeature;
