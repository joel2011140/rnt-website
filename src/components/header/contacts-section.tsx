import React from "react";
import { useHeaderDictionary } from "../../locales/hooks/use-header-dictionary";
import { useLocale } from "../../context/locale/locale-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export function ContactsSection() {
  const { locale, setLocale } = useLocale();
  const reservedArea = useHeaderDictionary("reservedArea") as string;
  const careers = useHeaderDictionary("careers") as string;
  const contacts = useHeaderDictionary("contacts") as string;

  const locales = [
    { value: "pt", label: "PT", flag: "fi fi-ao" }, // Angola flag
    { value: "en", label: "EN", flag: "fi fi-gb" },
    { value: "fr", label: "FR", flag: "fi fi-fr" },
    { value: "zh", label: "中文", flag: "fi fi-cn" },
  ];

  // Render selected value with flag + label
  const renderLocale = (val: string) => {
    const selected = locales.find((l) => l.value === val);
    if (!selected) return "Lang";
    return (
      <span className="flex items-center gap-2">
        <span className={`${selected.flag} w-4 h-4`} />
        <span>{selected.label}</span>
      </span>
    );
  };

  return (
    <div className="flex-1 p-1 flex gap-2 sm:gap-3 bg-aqua-rnt-darkest justify-end items-center">
      <nav className="flex gap-4 text-white text-[0.75rem]">
        <a
          href="#reserved"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
        >
          {reservedArea}
        </a>
        <a
          href="#careers"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
        >
          {careers}
        </a>
        <a
          href="#contacts"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
        >
          {contacts}
        </a>
      </nav>

      <Select value={locale} onValueChange={(val) => setLocale(val as any)}>
        <SelectTrigger className="w-auto px-2 bg-transparent text-white border-0 outline-none focus:ring-0 hover:bg-transparent justify-start">
          <SelectValue placeholder="Lang">{renderLocale(locale)}</SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white text-aqua-rnt-darkest">
          {locales.map((lang) => (
            <SelectItem
              key={lang.value}
              value={lang.value}
              className="cursor-pointer hover:bg-aqua-rnt-darker hover:text-white flex items-center gap-2"
            >
              <span className={`${lang.flag} w-4 h-4`} />
              <span>{lang.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
