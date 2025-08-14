import React from "react";
import { Header } from "./components/header/header.tsx";
import { LocaleProvider } from "./context/locale/locale-context.tsx";
import { Footer } from "@components/footer/footer.tsx";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 w-full max-w-[90rem] mx-auto">
          {children}
        </div>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
