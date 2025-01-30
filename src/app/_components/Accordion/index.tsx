"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

interface CustomAccordionProps {
  items: AccordionItemProps[];
  defaultIndex?: number | null;
}

export default function CustomAccordion({
  items,
  defaultIndex = 0,
}: CustomAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultIndex);

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border border-gray-200 rounded shadow-sm overflow-hidden"
          >
            {/* Başlık (AccordionTrigger) */}
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left bg-gray-100 p-3 font-semibold text-lg flex justify-between items-center hover:underline"
            >
              <span>{item.title}</span>
              <span className="hover:no-underline">{isOpen ? "−" : "+"}</span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-white text-gray-700">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
