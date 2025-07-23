export type UnitSpecifier = {
    id: string,
    abbr?: string,
    full: string,
    long?: string,
}

// Basic (count)
type SimpleUnit =
    | "count"
    | "pinch"
    | "dash"
    | "splash"
    | "drizzle"
    | "stick" // e.g., stick of butter
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