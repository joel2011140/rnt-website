import React from "react"
import { useHeaderDictionary } from "../../locales/hooks/use-header-dictionary"
import { useLocale } from "../../context/locale/locale-context"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"

export function ContactsSection() {
  const { locale, setLocale } = useLocale()
  const reservedArea = useHeaderDictionary("reservedArea") as string
  const careers = useHeaderDictionary("careers") as string
  const contacts = useHeaderDictionary("contacts") as string

  // Array of available locales
  const locales = [
    { value: "pt", label: "PT" },
    { value: "en", label: "EN" },
    { value: "fr", label: "FR" },
    { value: "zh", label: "中文" },
  ]

  return (
    <div className="flex-1 p-1 flex  gap-2 sm:gap-3 bg-aqua-rnt-darkest justify-end items-center">
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
          <SelectValue placeholder="Lang" />
        </SelectTrigger>
        <SelectContent className="bg-white text-aqua-rnt-darkest">
          {locales.map((lang) => (
            <SelectItem
              key={lang.value}
              value={lang.value}
              className="cursor-pointer hover:bg-aqua-rnt-darker hover:text-white"
            >
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
