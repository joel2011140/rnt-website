import React, { useState } from "react";
import { useHeaderDictionary } from "../../locales/hooks/use-header-dictionary";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNavigation() {
  const main = useHeaderDictionary("main") as string;
  const about = useHeaderDictionary("about") as string;
  const businessArea = useHeaderDictionary("business-area") as string;
  const electricityTransport = useHeaderDictionary("electricity-transport") as string;
  const technology = useHeaderDictionary("technology") as string;
  const press = useHeaderDictionary("press") as string;

  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: main, href: "/" },
    { label: about, href: "/about" },
    { label: businessArea, href: "/business-area" },
    { label: electricityTransport, href: "/electricity-transport" },
    { label: technology, href: "/technology" },
    { label: press, href: "/press" },
  ];

  return (
    <div className="sm:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-aqua-rnt-darkest focus:outline-none"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-aqua-rnt-darkest text-white flex flex-col items-center justify-center z-50"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-white focus:outline-none"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {/* Centered nav items */}
            <ul className="flex flex-col gap-6 text-lg">
              {options.map((option, index) => (
                <motion.li
                  key={option.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <a
                    href={option.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
                  >
                    {option.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
