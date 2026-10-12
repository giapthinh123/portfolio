import Link from "next/link";

export type SiteLocale = "en" | "vi";

type LanguageSwitchProps = {
  locale: SiteLocale;
  path: "/" | "/projects/healthcare";
};

export default function LanguageSwitch({ locale, path }: LanguageSwitchProps) {
  const labels = locale === "vi"
    ? { group: "Chọn ngôn ngữ", en: "Chuyển sang tiếng Anh", vi: "Đang dùng tiếng Việt" }
    : { group: "Select language", en: "English is selected", vi: "Switch to Vietnamese" };

  return (
    <div className="lab-language-switch" role="group" aria-label={labels.group}>
      <Link
        href={`${path}?lang=en#top`}
        className="lab-language-option"
        aria-current={locale === "en" ? "page" : undefined}
        aria-label={labels.en}
        title={labels.en}
      >
        EN
      </Link>
      <Link
        href={`${path}?lang=vi#top`}
        className="lab-language-option"
        aria-current={locale === "vi" ? "page" : undefined}
        aria-label={labels.vi}
        title={labels.vi}
      >
        VI
      </Link>
    </div>
  );
}
