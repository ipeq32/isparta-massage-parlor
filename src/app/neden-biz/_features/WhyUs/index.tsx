"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const paragraphs = [
  "Isparta Gül Şehri Spa ve Masaj Salonu olarak, Isparta’nın huzurlu atmosferini uzman masaj teknikleriyle bir araya getiriyoruz. İsmimizi aldığı gül kokusunun sağladığı sakinliği, eğitimli ve deneyimli terapistlerimizin profesyonelliğiyle harmanlayarak misafirlerimize benzersiz bir deneyim yaşatmaya odaklanıyoruz. Burada, sadece bedensel rahatlama değil, ruhsal dinginlik de bulacağınız bir yolculuğa çıkacaksınız. “Neden bizi tercih etmeliyim?” diye düşündüğünüzde, öncelikle kişiye özel yaklaşımımızı ön plana çıkarıyoruz. Her müşteri, kendine özgü ihtiyaçlara ve beklentilere sahiptir. Bu sebeple, masaj seanslarımızı tamamen size göre düzenleyip, vücudunuzun ve zihninizin gerçek anlamda dinlenmesini amaçlıyoruz.",
  "Hijyen ve kalite standartlarımız, memnuniyetinizi kalıcı kılmak için büyük önem taşıyor. Her seans sonrasında masaj odalarımızı özenle temizliyor, kullanılan tüm malzemeleri ya tek kullanımlık ya da özel sterilizasyon yöntemleriyle hazırlıyoruz. Bu sayede sağlığınız ve konforunuz her zaman güvende. Kullandığımız yağlar ve aromatik esanslar doğal içeriklerden oluşurken, özellikle gül esansının rahatlatıcı etkisini hemen hissetmeniz mümkün. Masajla birleşen bu hoş koku, duyularınızın tamamına hitap ederek bütünsel bir sakinleşme sağlar.",
  "Bir diğer avantajımız, sürekli eğitim programlarına katılan ve yeni tekniklerle kendini güncelleyen terapistlerimizdir. Ekibimizde yer alan uzmanlar, klasik masajdan lenf masajına, medikal masajdan aroma terapiye kadar geniş bir yelpazede hizmet verebilecek donanıma sahiptir. İhtiyaç duyduğunuz bölgeye özel programlama yapılarak, her seansta maksimum verim elde etmeniz sağlanır.",
  "Ayrıca, hoş bir atmosfer yaratmayı da ihmal etmiyoruz: Yumuşak müzikler, gül yapraklarıyla süslenmiş detaylar ve loş aydınlatma eşliğinde kendinizi adeta bir rüya âleminde bulabilirsiniz. Bütün bu nedenlerle, Gül Şehri Spa ve Masaj Salonu’nda geçirdiğiniz zamanın değerini hissedeceksiniz. Bir sonraki adımda, daha dinç, daha mutlu ve daha huzurlu bir bedene kavuşmak için sizi salona bekliyoruz.",
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

const WhyUsFeature = () => {
  return (
    <div className="min-h-screen">
      <figure className="relative h-[500px] overflow-hidden">
        <Image
          src="https://www.atasehirmasajspa.com.tr/wp-content/uploads/sites/8/2025/01/atasehirin-gozde-masaj-salonu-remiks-spa-ile-essiz-bir-deneyim-1200x500.jpg"
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
            Neden Biz?
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

export default WhyUsFeature;
