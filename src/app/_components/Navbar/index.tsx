"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavbarComponent = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center p-4 h-32 text-white sticky bg-white/30 backdrop-blur-sm top-0 z-10">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="https://www.pienspavemasajsalonu.com/wp-content/uploads/pien_orj.png"
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/hakkimizda"
            className={cn("hover:text-yellow-500", {
              "text-yellow-500": pathname === "/hakkimizda",
            })}
          >
            Hakkımızda
          </Link>
          <Link
            href="/iletisim"
            className={cn("hover:text-yellow-500", {
              "text-yellow-500": pathname === "/iletisim",
            })}
          >
            İletişim
          </Link>
          <Link
            href="/neden-biz"
            className={cn("hover:text-yellow-500", {
              "text-yellow-500": pathname === "/neden-biz",
            })}
          >
            Neden Biz
          </Link>
          <Link
            href="/galeri"
            className={cn("hover:text-yellow-500", {
              "text-yellow-500": pathname === "/galeri",
            })}
          >
            Galeri
          </Link>
        </div>
        <div>
          <Link href="/randevu-al">
            <button className="flex justify-between items-center gap-3 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700 hover:text-green-500 transition-all duration-300 ease-linear">
              <Icon
                icon="logos:whatsapp-icon"
                className="w-6 h-6 inline-block"
              />
              <span>Randevu Al</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
