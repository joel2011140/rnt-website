import { useHeaderDictionary } from "../../locales/hooks/use-header-dictionary";
import MemoRntLogo from "../../assets/rnt-logo";
import { MobileNavigation } from "./mobile-navigation";

export function HeaderNavigation() {
  const main = useHeaderDictionary("main") as string;
  const about = useHeaderDictionary("about") as string;
  const businessArea = useHeaderDictionary("business-area") as string;
  const electricityTransport = useHeaderDictionary("electricity-transport") as string;
  const technology = useHeaderDictionary("technology") as string;
  const press = useHeaderDictionary("press") as string;

  const options = [
    { label: main, href: "/" },
    { label: about, href: "/about" },
    { label: businessArea, href: "/business-area" },
    { label: electricityTransport, href: "/electricity-transport" },
    { label: technology, href: "/technology" },
    { label: press, href: "/press" },
  ];

  return (
    <nav className="w-full flex items-center justify-between p-4 h-full border relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <MemoRntLogo />
      </div>

      {/* Desktop nav */}
      <ul className="hidden sm:flex absolute left-1/2 -translate-x-1/2 gap-4 text-sm lg:text-[1rem]">
        {options.map((option) => (
          <li key={option.label}>
            <a
              href={option.href}
              className="relative pb-2 whitespace-nowrap group"
            >
              {option.label}
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-aqua-rnt-darkest transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile nav (hamburger) */}
      <div className="sm:hidden ml-4">
        <MobileNavigation />
      </div>
    </nav>
  );
}
