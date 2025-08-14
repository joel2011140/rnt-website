import { cn } from "../lib/utils";
import { ReactNode } from "react";

export function VerticalLineContent({
  children,
  asNormal = false,
  className,
}: {
  children?: ReactNode;
  asNormal?: boolean;
  className?: string; // <-- added
}) {
  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center",
        !asNormal && "z-10 bg-black/40",
        className // <-- merge external classes
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4",
          !asNormal && "px-6 md:px-24"
        )}
      >
        {/* Vertical Line */}
        <div
          className={cn(
            "w-[4px] rounded-full",
            asNormal
              ? "!bg-opacity-50 h-[3rem] bg-[#996B00]"
              : "h-[6.6875rem] bg-[#996B00]"
          )}
        />

        {/* Children */}
        {children}
      </div>
    </div>
  );
}
