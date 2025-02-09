"use client";

import { cn } from "@/lib/classname";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

export default function SpeedDialButtonComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      label: "İnstagram",
      icon: <Icon icon="mdi:instagram" width="24" height="24" />,
      href: "https://www.instagram.com/ispartagulsehrimasaj",
    },
    {
      label: "Facebook",
      icon: <Icon icon="mdi:facebook" width="24" height="24" />,
      href: "https://www.facebook.com/RoseTownSpaCenter",
    },
    {
      label: "Whatsapp",
      icon: <Icon icon="mdi:whatsapp" width="24" height="24" />,
      href: "https://api.whatsapp.com/send/?phone=905302411232",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full relative min-h-[380px]">
      <div
        className="flex flex-col justify-center items-center absolute right-6 bottom-6 group z-50"
        onMouseLeave={() => setIsOpen(false)}
      >
        <motion.div
          className="flex flex-col items-center mb-4 space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          {contacts.map((contact, index) => (
            <SpeedDialButton
              key={index}
              {...{
                initial: { opacity: 0, x: -10 },
                animate: isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 },
                transition: {
                  duration: 0.3,
                  delay: (contacts.length - 1 - index) * 0.1,
                },
              }}
              href={contact.href}
              label={contact.label}
              icon={contact.icon}
            />
          ))}
        </motion.div>

        <div className="flex items-center">
          {!isOpen && (
            <span className="flex items-center text-lg text-gray-600 mr-2 transition-opacity backdrop-blur-md rounded-full px-2.5 py-1 bg-white shadow-lg">
              İletişim
              <span className="ml-2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-black" />
            </span>
          )}
          <motion.button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex justify-center items-center self-end w-16 h-16 text-gray-900 bg-white rounded-full border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none"
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 135 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon icon="mdi:plus" className="w-10 h-10" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function SpeedDialButton({
  label,
  icon,
  href,
  ...rest
}: {
  label: string;
  icon: ReactNode;
  href?: string;
}) {
  const [isHover, setIsHover] = useState(false);

  const router = useRouter();

  return (
    <motion.div {...rest} className="flex items-center gap-3 relative">
      <span
        className={cn(
          "text-sm text-gray-600 transition-opacity backdrop-blur-md rounded-full px-2 py-1 absolute right-14 bg-white shadow-lg",
          {
            "opacity-100": isHover,
            "opacity-0": !isHover,
          }
        )}
      >
        {label}
        <span className="absolute top-1/2 right-[-6px] w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-white transform -translate-y-1/2" />
      </span>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => href && router.push(href)}
        className="w-12 h-12 flex justify-center items-center bg-white rounded-full border border-gray-300 shadow-sm hover:bg-gray-50"
      >
        {icon}
      </button>
    </motion.div>
  );
}
