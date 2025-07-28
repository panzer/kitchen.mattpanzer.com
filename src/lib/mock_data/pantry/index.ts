import { type UnitSpecifier, stringifyUnit, unitHasAbbr } from "$lib/mock_data/units";
import type { TextLengthType, Nullable } from "$lib/types";
import type Fraction from "fraction.js";

export interface PantryItemOption {
    name: string,
    emoji?: string,
    imageUrl?: string,
}

export interface BaseSomePantryItem extends PantryItemOption {
    quantity: Quantifier;
}

export interface RecipeItem extends BaseSomePantryItem {
    modifier: string;
    isOptional: boolean;
}

type Count = number | Fraction | "some";  // 'some' means no count is shown

export type Quantifier = {
    count: Count;
    unit: string | UnitSpecifier
}

function stringifyCount(c: Nullable<Count>): string {
    if (!c || c === "some") return "";
    if (typeof c === "number") return c.toString();
    else return c.toFraction(true);
}


export function stringifyQuantifier(quantity: Quantifier, size: TextLengthType = 'default'): string {
    if (!quantity) return "";
    const { count, unit } = quantity;
    const countStr = stringifyCount(count);
    const unitStr = stringifyUnit(unit, size);
    const hasSpaceBetween = size !== 'short' || !unitHasAbbr(unit);
    return `${countStr}${hasSpaceBetween ? '\u00A0' : ''}${unitStr}`.trim();
}

export const items: PantryItemOption[] = [
    { name: 'apple', emoji: '🍎' },
    { name: 'avocado', emoji: '🥑' },
    { name: 'bagel', emoji: '🥯' },
    { name: 'banana', emoji: '🍌' },
    { name: 'bread', emoji: '🍞' },
    { name: 'broccoli', emoji: '🥦' },
    { name: 'butter', emoji: '🧈' },
    { name: 'black pepper', emoji: '🧂' },
    { name: 'cabbage', emoji: '🥬' },
    { name: 'cheese', emoji: '🧀' },
    { name: 'chicken', emoji: '🐔' },
    { name: 'chips', emoji: '🍟' },
    { name: 'cookies', emoji: '🍪' },
    { name: 'corn', emoji: '🌽' },
    { name: 'chilli powder', emoji: '🌶️' },
    { name: 'chocolate', emoji: '🍫' },
    { name: 'cream cheese', emoji: '🧀' },
    { name: 'farfalle pasta', emoji: '🍝' },
    { name: 'grapes', emoji: '🍇' },
    { name: 'green onion', emoji: '🧅' },
    { name: 'hummus', emoji: '📁' },
    { name: 'jelly', emoji: '📁' },
    { name: 'lemon', emoji: '🍋' },
    { name: 'lettuce', emoji: '🥬' },
    { name: 'lime', emoji: '🍋' },
    { name: 'manderine orange', emoji: '🍊' },
    { name: 'mayo', emoji: '📁' },
    { name: 'napa cabbage', emoji: '🥬' },
    { name: 'octopus', emoji: '🐙' },
    { name: 'pasta', emoji: '🍝' },
    { name: 'peanut butter', emoji: '🥜' },
    { name: 'rotini pasta', emoji: '🍝' },
    { name: 'radish', emoji: '🥗' },
    { name: 'red onion', emoji: '🧅' },
    { name: 'rice', emoji: '🍚' },
    { name: 'salt', emoji: '🧂' },
    { name: 'sesame seeds', emoji: '📁' },
    { name: 'sesame oil', emoji: '📁' },
    { name: 'soy sauce', emoji: '📁' },
    { name: 'toast', emoji: '🍞' },
    { name: 'turkey', emoji: '🍗' },
    { name: 'vinegar', emoji: '📁' },
    { name: 'yogurt', emoji: '🥛' }
];