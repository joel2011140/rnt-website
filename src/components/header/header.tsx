import React from "react";
import { ContactsSection } from "./contacts-section";
import { HeaderNavigation } from "./header-navigation";

export function Header() {
  return (
    <header className="w-full max-h-[4.5rem] h-full stack">
      <ContactsSection />
      <HeaderNavigation />
    </header>
  );
}