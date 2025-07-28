import type { Recipe } from "$lib/types/recipe";
import type { RecipeItem } from "../pantry";
import { gram, count, cup, clove } from "../units";

const recipe_carbonara_items: RecipeItem[] = [
    {
        name: "spaghetti",
        quantity: { count: 400, unit: gram },
        modifier: "",
        isOptional: false
    },
    {
        name: "pancetta",
        quantity: { count: 150, unit: gram },
        modifier: "",
        isOptional: false
    },
    {
        name: "egg",
        quantity: { count: 2, unit: count },
        modifier: "large",
        isOptional: false
    },
    {
        name: "Parmesan cheese",
        quantity: { count: 1, unit: cup },
        modifier: "grated",
        isOptional: false
    },
    {
        name: "garlic",
        quantity: { count: 2, unit: clove },
        modifier: "minced",
        isOptional: false
    },
    {
        name: "salt",
        quantity: { count: 'some', unit: "" },
        modifier: "",
        isOptional: false
    },
    {
        name: "black pepper",
        quantity: { count: 'some', unit: "" },
        modifier: "freshly ground",
        isOptional: false
    },
    {
        name: "parsley",
        quantity: { count: 0, unit: "" },
        modifier: "fresh, chopped",
        isOptional: true
    }
];

export const recipe_carbonara: Recipe = {
    title: 'Classic Spaghetti Carbonara',
    heroImage:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    description:
        'A creamy, savory Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    servings: 4,
    metadata: {
        prepTime: '15 min',
        cookTime: '20 min',
        difficulty: 'Easy',
        cuisine: 'Italian'
    },
    ingredients: recipe_carbonara_items,
    instructions: [
        'Cook spaghetti in a large pot of salted boiling water until al dente. Reserve 1/2 cup pasta water, then drain.',
        'In a pan, cook pancetta over medium heat until crispy. Add garlic and sauté for 1 minute.',
        'In a bowl, whisk eggs and Parmesan together.',
        'Add drained spaghetti to the pan with pancetta. Remove from heat.',
        'Quickly pour egg mixture over pasta, tossing rapidly to coat (add reserved pasta water as needed for creaminess).',
        'Season with salt and plenty of black pepper. Garnish with parsley and extra cheese.'
    ],
    tags: ['Dinner'],
    relatedRecipes: [
        {
            title: 'Pesto Pasta',
            image:
                'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80'
        },
        {
            title: 'Lasagna',
            image:
                'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80'
        }
    ]
};

