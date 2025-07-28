import type { RecipeItem } from "$lib/mock_data/pantry";


export type Recipe = {
    title: string;
    heroImage: string;
    description: string;
    servings: number;
    metadata: {
        prepTime: string;
        cookTime: string;
        difficulty: string;
        cuisine: string;
    };
    ingredients: RecipeItem[];
    instructions: string[];
    tags: string[];
    relatedRecipes: {
        title: string;
        image: string;
    }[];
};
