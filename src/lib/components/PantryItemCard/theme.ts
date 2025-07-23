import { tv } from "tailwind-variants";

export const itemCard = tv({
    slots: {

    },
    variants: {
        size: {
            sm: { card: "" },
            md: { card: "" },
            lg: { card: "" },
        }
    },
    defaultVariants: {
        size: "md",
    }
})

export type ItemCardSlots = keyof typeof itemCard.slots;
export type ItemCardTheme = Partial<Record<ItemCardSlots, string>>;