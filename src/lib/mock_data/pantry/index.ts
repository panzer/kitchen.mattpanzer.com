import type { UnitSpecifier } from "$lib/mock_data/units";

export interface PantryItemOption {
    name: string,
    emoji?: string,
    imageUrl?: string,
}

export interface BaseSomePantryItem extends PantryItemOption {
    quantity: Quantifier;
}

export type Quantifier = {
    count: number;
    unit: string | UnitSpecifier
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