import React from "react";
import { Header } from "./components/header/header.tsx";
import { LocaleProvider } from "./context/locale/locale-context.tsx";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <div className=" flex flex-col">
        <Header />
        <div className="w-full max-w-[90rem] mx-auto max-h-screen">
          {children}
        </div>
      </div>
    </LocaleProvider>
  )
}
