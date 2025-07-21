import type { Snippet } from "svelte";
import type { ClassValue, HTMLInputAttributes } from "svelte/elements";


export type InputValue = string | number | string[] | undefined;

export interface InputProps<T extends InputValue = string, U = string> extends Omit<HTMLInputAttributes, "size" | "children" | "value"> {
    children?: Snippet<[{ class: string } & Omit<InputProps<T>, "children" | "left" | "right" | "size">]>;
    left?: Snippet;
    right?: Snippet;
    size?: "md";
    value?: T;
    elementRef?: HTMLInputElement;
    color?: "default";
    leftClass?: ClassValue;
    rightClass?: ClassValue;
    divClass?: ClassValue;
    wrapperClass?: ClassValue;
    clearable?: boolean;
    clearableSvgClass?: ClassValue;
    clearableColor?: "none";
    clearableClass?: ClassValue;
    clearableOnClick?: () => void;
    data?: U[];
    stringifyData?: (item: U) => string;
    maxSuggestions?: number;
    onSelect?: (item: U) => void;
    comboClass?: ClassValue;
    comboItemClass?: ClassValue;
    oninput?: (event: Event) => void;
    onfocus?: (event: FocusEvent) => void;
    onblur?: (event: FocusEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    /** @deprecated Use `oninput` instead. Will be removed in next minor version. */
    onInput?: (event: Event) => void;
    /** @deprecated Use `onfocus` instead. Will be removed in next minor version. */
    onFocus?: (event: FocusEvent) => void;
    /** @deprecated Use `onblur` instead. Will be removed in next minor version. */
    onBlur?: (event: FocusEvent) => void;
    /** @deprecated Use `onkeydown` instead. Will be removed in next minor version. */
    onKeydown?: (event: KeyboardEvent) => void;
}