import React from "react";
import { Link } from "react-router-dom";
import { useHeaderDictionary } from "../../locales/hooks/use-header-dictionary";
import MemoRntLogo from "../../assets/rnt-logo";
import { MobileNavigation } from "./mobile-navigation";

export function HeaderNavigation() {
  // Header labels
  const labels = {
    main: useHeaderDictionary("main") as string,
    about: useHeaderDictionary("about") as string,
    businessArea: useHeaderDictionary("business-area") as string,
    electricityTransport: useHeaderDictionary("electricity-transport") as string,
    technology: useHeaderDictionary("technology") as string,
    press: useHeaderDictionary("press") as string,
  };

  // Navigation options
  const options = [
    { label: labels.main, to: "/" },
    { label: labels.about, to: "/about" },
    { label: labels.businessArea, to: "/business-area" },
    { label: labels.electricityTransport, to: "/electricity-transport" },
    { label: labels.technology, to: "/technology" },
    { label: labels.press, to: "/press" },
  ];

  return (
    <nav className="w-full flex items-center justify-between p-4 relative">
      {/* Logo */}
      <div className="flex-shrink-0 ml-12">
        <MemoRntLogo />
      </div>

      {/* Desktop navigation */}
      <ul className="hidden sm:flex absolute left-1/2 -translate-x-1/3 gap-6 text-sm lg:text-base">
        {options.map((option) => (
          <li key={option.label}>
            <Link
              to={option.to}
              className="relative pb-2 whitespace-nowrap group transition-colors duration-200 hover:text-aqua-rnt-darkest"
            >
              {option.label}
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-aqua-rnt-darkest transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile navigation */}
      <div className="sm:hidden">
        <MobileNavigation />
      </div>
    </nav>
  );
}
