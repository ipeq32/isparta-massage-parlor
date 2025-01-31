"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const paragraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur impedit atque facilis saepe, temporibus esse tenetur consequatur, dolores, ratione facere ipsa exercitationem illum omnis. Error, alias? Reprehenderit, quidem voluptate tempora fuga debitis magnam impedit tenetur saepe accusamus magni nobis ad perferendis vitae neque voluptatibus consequatur quae optio corrupti! Et quia illo tenetur vero quasi eos. Commodi temporibus hic nobis vel, neque officiis iste atque molestias quam? Perferendis tenetur iusto dignissimos numquam quae sint non blanditiis officia nihil dolor. Voluptatum, ipsum sit rem pariatur nobis inventore omnis nihil maxime tempore at, cupiditate totam fuga quod. Vero magnam vitae perspiciatis modi alias tempore sunt fuga sit ipsam quia, maxime iusto repudiandae veniam reprehenderit fugit minima ex ab sint praesentium voluptas, magni, eligendi eaque obcaecati culpa! Nobis, inventore odit? Accusamus perferendis quis numquam laudantium amet, expedita, velit dolores neque harum, assumenda rerum nostrum recusandae. Odio quaerat nemo earum laboriosam, exercitationem optio itaque nostrum beatae eaque animi deleniti neque cumque repellat perspiciatis fugit totam labore expedita possimus blanditiis reprehenderit eum cum dicta nulla saepe. Dolor illo fuga nihil nisi suscipit tenetur in quos consequatur expedita vel earum nemo eaque, nulla dolore at tempore accusantium consequuntur fugiat repudiandae praesentium? Architecto voluptas delectus id! Laudantium, officiis.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis in accusantium, aliquid commodi, vel cupiditate possimus neque eligendi velit nostrum nisi esse totam ipsam quibusdam minima ullam error optio quas dicta autem blanditiis! Quasi omnis asperiores quaerat perferendis non dolor blanditiis sequi, officiis nam, quibusdam facere odio ex repudiandae porro.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus autem, eum blanditiis doloribus aut. Non reiciendis facilis sapiente modi, dignissimos dolores ab asperiores neque quo ducimus nam soluta minima corrupti fugiat! Nihil amet nam accusamus molestias maxime voluptates a, blanditiis odio debitis dolorem minus fuga ducimus provident eum exercitationem officia! Doloremque dolores sint illo omnis dolore. Qui culpa aspernatur, nam deserunt quam expedita reiciendis temporibus cupiditate itaque tenetur vero quo non sed optio voluptatum ut libero magnam iste soluta quaerat? Temporibus esse sequi fugit, voluptatibus dicta repellat at, magnam doloribus porro, modi reprehenderit quam officia quia ut libero corporis.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos culpa quisquam doloribus libero! Quasi sequi eaque inventore quaerat unde sed rem delectus, quas hic vel quia cum temporibus nulla explicabo accusantium sint! Unde expedita vero quibusdam et quasi aut consequuntur atque reiciendis, perferendis, cum nostrum debitis illum repellendus ducimus velit, maxime nam dolor. Laudantium ad ratione dolor dolore omnis libero placeat repellat, neque debitis itaque odio voluptas reiciendis excepturi incidunt aperiam doloremque odit autem! Velit accusantium quibusdam, laboriosam accusamus delectus similique. Harum tempora magnam, sunt fugit distinctio nihil accusantium? Hic delectus aliquam laudantium ipsum corrupti eaque adipisci quibusdam ducimus amet deleniti rerum ullam nemo dolor explicabo repellendus atque, sunt sequi ipsam tenetur fugiat obcaecati fugit voluptates. Tenetur explicabo similique, dolorum placeat nihil quidem vero ad",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos culpa quisquam doloribus libero! Quasi sequi eaque inventore quaerat unde sed rem delectus, quas hic vel quia cum temporibus nulla explicabo accusantium sint! Unde expedita vero quibusdam et quasi aut consequuntur atque reiciendis, perferendis, cum nostrum debitis illum repellendus ducimus velit, maxime nam dolor. Laudantium ad ratione dolor dolore omnis libero placeat repellat, neque debitis itaque odio voluptas reiciendis excepturi incidunt aperiam doloremque odit autem! Velit accusantium quibusdam, laboriosam accusamus delectus similique. Harum tempora magnam, sunt fugit distinctio nihil accusantium? Hic delectus aliquam laudantium ipsum corrupti eaque adipisci quibusdam ducimus amet deleniti rerum ullam nemo dolor explicabo repellendus atque, sunt sequi ipsam tenetur fugiat obcaecati fugit voluptates. Tenetur explicabo similique, dolorum placeat nihil quidem vero ad",
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

const PrivacyPolicyFeature = () => {
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
            Gizlilik Politikası
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

export default PrivacyPolicyFeature;
