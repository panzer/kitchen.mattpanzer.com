import { getContext } from "svelte";
import { type ThemeConfig } from "$lib/types";

export function getTheme<K extends keyof ThemeConfig>(componentKey: K) {
    const theme = getContext<ThemeConfig>("theme");
    return theme?.[componentKey];
}