import React from "react";
import { Header } from "./components/header/header.tsx";
import { LocaleProvider } from "./context/locale/locale-context.tsx";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <div className="w-full max-h-screen">
        <Header />
        {children}
      </div>
    </LocaleProvider>

  )
}