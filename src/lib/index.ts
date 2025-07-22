// place files you want to import through the `$lib` alias in this folder.

import { base } from '$app/paths'
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const LinkHandler = (link: string) => {
    if (process.env.NODE_ENV === 'development') {
        return link
    }

    if (link === '/') {
        return base
    }

    return base + link
}