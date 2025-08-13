import { useDictionary } from "./use-dictionary";

export function useHeaderDictionary(key?: string) {
  return useDictionary<Record<string, string>>("header", key);
}
