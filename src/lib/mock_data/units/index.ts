import type { TextLengthType } from "$lib/types";

export type UnitSpecifier = {
    id: UnitId,
    abbr?: string,
    full?: string,
    long?: string,
    plural?: Omit<UnitSpecifier, 'id'>,
} | string;  // string case is shorthand used when id == full

// Basic (count)
type SimpleUnit =
    | "count"
    | "pinch"
    | "dash"
    | "splash"
    | "drizzle"
    | "stick" // e.g., stick of butter
    | "head"  // produce
    | "clove"  // e.g., garlic
    | "package" // e.g., package of yeast

// Weight
type WeightUnit =
    | "milligram"
    | "gram"
    | "kilogram"
    | "ounce"
    | "pound"
    | "stone"

// Solid volume
type VolumeUnit =
    | "cup"
    | "tablespoon"
    | "teaspoon"
    | "quart"
    | "liter"
    | "fluid ounce"

// Union
export type UnitId = SimpleUnit | WeightUnit | VolumeUnit;

export const count: UnitSpecifier = { id: "count", full: "" };
export const pinch: UnitSpecifier = { id: "pinch", plural: "pinches" };
export const dash: UnitSpecifier = { id: "dash", plural: "dashes" };
export const splash: UnitSpecifier = { id: "splash", plural: "splashes" };
export const drizzle: UnitSpecifier = "drizzle";
export const stick: UnitSpecifier = "stick";
export const head: UnitSpecifier = "head";
export const clove: UnitSpecifier = "clove";
export const packageUnit: UnitSpecifier = { id: "package", abbr: "pkg", full: "package" };

// Weight units
export const milligram: UnitSpecifier = { id: "milligram", abbr: "mg", full: "milligram" };
export const gram: UnitSpecifier = { id: "gram", abbr: "g", full: "gram" };
export const kilogram: UnitSpecifier = { id: "kilogram", abbr: "kg", full: "kilogram" };
export const ounce: UnitSpecifier = { id: "ounce", abbr: "oz", full: "ounce" };
export const pound: UnitSpecifier = { id: "pound", abbr: "lb", full: "pound" };
export const stone: UnitSpecifier = { id: "stone", abbr: "st", full: "stone" };

// Volume units
export const cup: UnitSpecifier = "cup";
export const tablespoon: UnitSpecifier = { id: "tablespoon", abbr: "tbsp", full: "tablespoon" };
export const teaspoon: UnitSpecifier = { id: "teaspoon", abbr: "tsp", full: "teaspoon" };
export const quart: UnitSpecifier = { id: "quart", abbr: "qt", full: "quart" };
export const liter: UnitSpecifier = { id: "liter", abbr: "L", full: "liter" };
export const fluidOunce: UnitSpecifier = { id: "fluid ounce", abbr: "fl oz", full: "fluid ounce" };


export function stringifyUnit(unit: UnitSpecifier, size: TextLengthType = 'default',): string {
    if (typeof unit === "string") {
        return unit;
    }
    if (size === "short") {
        return unit.abbr || unit.id || unit.full || "";
    } else {
        return unit.full || unit.id || unit.abbr || "";
    }
}

export function unitHasAbbr(unit: UnitSpecifier): boolean {
    return typeof unit === "object" && typeof unit.abbr === "string" && unit.abbr.length > 0;
}