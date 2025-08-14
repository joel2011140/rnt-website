import { Link } from "react-router-dom";
import { useHeaderDictionary } from "../../locales/hooks/use-header-dictionary";
import MemoWhiteRntLogo from "../../assets/white-rnt-logo";

export function Footer() {
  const allRightsText = useHeaderDictionary("all-rights") as string;
  const politics = useHeaderDictionary("politics") as string;
  const terms = useHeaderDictionary("terms") as string;
  const contactsLabel = useHeaderDictionary("contacts") as string;
  const contactsDescription = useHeaderDictionary("contacts-rnt-description") as string;
  const links = useHeaderDictionary("links") as string;
  const linksDescription = useHeaderDictionary("links-description") as string;
  const media = useHeaderDictionary("media") as string;
  const mediaDescription = useHeaderDictionary("media-description") as string;

  const renderLinks = (description: string) =>
    description.split("\n").map((item, index) => (
      <Link
        key={index}
        to="#"
        className="font-normal text-body-14 md:text-[1.25rem] text-white hover:underline block text-center md:text-left"
      >
        {item}
      </Link>
    ));

  return (
    <footer className="w-full bg-[#273038] flex flex-col p-6 md:p-8">
      {/* Top section */}
      <div className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-around gap-8 md:gap-16 text-center md:text-left">
        <MemoWhiteRntLogo className="mb-4 md:mb-0" />

        <div className="flex flex-col gap-2">
          <span className="font-bold text-body-14 md:text-[1.25rem] text-[#996B00]">{contactsLabel}</span>
          {renderLinks(contactsDescription)}
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-body-14 md:text-[1.25rem] text-[#996B00]">{links}</span>
          {renderLinks(linksDescription)}
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold text-body-14 md:text-[1.25rem] text-[#996B00]">{media}</span>
          {renderLinks(mediaDescription)}
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full mt-8 flex flex-col items-center md:flex-row md:justify-between gap-4 text-white text-body-12 text-center md:text-left">
        <span>{allRightsText}</span>
        <div className="flex items-center gap-x-4">
          <Link to="/politics" className="hover:underline">
            {politics}
          </Link>
          <span>|</span>
          <Link to="/terms" className="hover:underline">
            {terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}
