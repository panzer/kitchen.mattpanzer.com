import { type ClassValue } from "svelte/elements";

export interface ThemeConfig {
    [key: string]: ClassValue | ThemeConfig;
}