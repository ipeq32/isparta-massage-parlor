"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150.0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "flex items-center p-4 w-[100%] h-32 text-white fixed backdrop-blur-md top-0 z-10 transition-all duration-300 ease-in-out",
        {
          "bg-gray-900/80": isScrolled,
          "h-24": isScrolled,
          "shadow-xl": isScrolled,
          "bg-gray-800": pathname === "/" && isScrolled,
          "bg-gray-900": pathname !== "/" && isScrolled,
        }
      )}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              className="cursor-pointer rounded-full"
              src="/assets/gul_sehri_beyaz_logo.png"
              alt="Isparta Gül Şehri Masaj Salonu Logosu"
              width={isScrolled ? 80 : 90}
              height={90}
            />
          </Link>
        </div>
        <div
          className={cn("flex text-lg items-center space-x-4", {
            "text-md": isScrolled,
          })}
        >
          <Link
            href="/"
            className={cn(" hover:text-yellow-500", {
              "text-yellow-500": pathname === "/",
            })}
          >
            Ana Sayfa
          </Link>
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
          <Link href="https://api.whatsapp.com/send/?phone=905302411232&text=Randevu%20almak%20istiyorum.">
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
