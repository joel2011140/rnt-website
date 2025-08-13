import { useEffect, useState } from "react";
import { useLocale } from "../../context/locale/locale-context.tsx";

/**
 * Loads translation from a given file and optional key.
 * @param fileName - name of the JSON file in the locale folder (without .json)
 * @param key - optional key inside that file
 */
export function useDictionary<T = Record<string, string>>(fileName: string, key?: string) {
  const { locale } = useLocale();
  const [value, setValue] = useState<T | string>(key ? "" : ({} as T));

  useEffect(() => {
    import(`../../locales/${locale}/${fileName}.json`)
      .then((dict) => {
        if (key) {
          setValue((dict as any)[key] || "");
        } else {
          setValue(dict as T);
        }
      })
      .catch(() => setValue(key ? "" : ({} as T)));
  }, [fileName, key, locale]);

  return value;
}
