import Image from "next/image";
import HomeFeature from "./_features/Home";
import home from "../../public/images/home.jpg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-black dark:bg-white/[.06] p-8 rounded-lg shadow-lg">
        <Image
          className=""
          src="/images/home.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Image
          className=""
          src={home}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <HomeFeature />
      </main>
    </div>
  );
}
