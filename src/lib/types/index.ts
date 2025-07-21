export declare type SizeType = "xs" | "sm" | "md" | "lg" | "xl"

export * from "./theme";

export type Dish = {
    name: string;
    imageUrl: string;
    description?: string;
    selections?: DishSelection[];
    featuredCombinations?: Dish[];
};
type DishBase = {
    id: string;
    title: string;
    subtitle?: string;
    isRequired?: boolean;
};
type DishBoolean = {
    isBoolean: true;
};
type DishNotBoolean = {
    isBoolean?: false;
    options: DishSelectionOption[];
    maximumSelectionCount?: number;
};

export type DishSelection = (DishBase & DishBoolean) | (DishBase & DishNotBoolean);

export type DishSelectionOption = {
    id: string;
    name: string;
    subtitle?: string;
    requires_all_stocked_dishes?: Dish[]
    requires_any_stocked_dishes?: Dish[]
};

export type DishCartInfo = {
    count: number;
    doesNeedAttention?: boolean;
    infoText?: string;
    errorText?: string;
}