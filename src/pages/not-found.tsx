import { Link } from "react-router-dom";
import { NotFoundIllustration } from "../assets/not-found-illustration";
import { useHeaderDictionary } from "../locales/hooks/use-header-dictionary";

export default function NotFoundPage() {
  const notFoundTitle = useHeaderDictionary("not-found") as string
  return (
  <div className="flex flex-col min-h-screen items-center justify-center h-full p-4 text-center">
      <div className="w-full h-full md:w-96 md:h-96">
        <NotFoundIllustration />
        <p className="text-chumbo-dark-min text-heading-20 md:text-heading-28">{notFoundTitle}</p>
      </div>
    </div>
  );
}
