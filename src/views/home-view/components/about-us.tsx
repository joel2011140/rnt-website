import { VerticalLineContent } from "../../../components/vertical-line-content";
import MemoRntFullLogo from "../../../assets/rnt-full-logo";
import { useHeaderDictionary } from "../../../locales/hooks/use-header-dictionary";

export function AboutUs() {
  const aboutUsText = useHeaderDictionary("about-us");
  const aboutUsDescription = useHeaderDictionary("about-us.description");

  return (
    <div className="w-full md:w-[67.125rem] flex flex-col md:flex-row items-center md:gap-x-12 gap-y-6">
      <MemoRntFullLogo className="md:w-[20rem]" />
      <div className="w-full stack gap-y-4 md:p-0 p-4">
        <VerticalLineContent asNormal>
          <span className="text-body-14 md:text-[1.75rem] text-aqua-rnt-dark">
            {aboutUsText as string}
          </span>
        </VerticalLineContent>
        <span className="text-body-12 md:text-body-20 text-chumbo-dark-min font-normal break-words">
          {aboutUsDescription as string}
        </span>
      </div>
    </div>
  );
}
