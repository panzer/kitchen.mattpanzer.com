import type { Dish } from "$lib/types";

const bagel: Dish = {
    name: "Bagel",
    description: "Get in touch with your Jewish side, enjoy this delicious breakfast!",
    imageUrl: "data:image/jpeg;base64,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",
    selections: [
        {
            id: "flavor",
            title: "Choose Your Bagel",
            isBoolean: false,
            isRequired: true,
            options: [
                {
                    id: "plain",
                    name: "Plain",
                },
                {
                    id: "sesame",
                    name: "Sesame",
                },
                {
                    id: "everything",
                    name: "Everything",
                },
                {
                    id: "asiago",
                    name: "Asiago",
                },
                {
                    id: "salt",
                    name: "Salt",
                },
                {
                    id: "rosmary-salt",
                    name: "Rosmary Salt",
                },
            ],
            maximumSelectionCount: 1,
        },
        {
            id: "toast-level",
            title: "Choose Toast Level",
            isBoolean: false,
            isRequired: true,
            options: [
                {
                    id: "none",
                    name: "None",
                },
                {
                    id: "light-toast",
                    name: "Light",
                },
                {
                    id: "medium-toast",
                    name: "Medium",
                },
                {
                    id: "dark-toast",
                    name: "Dark",
                },
            ],
            maximumSelectionCount: 1,
        },
        {
            id: "additional-topping",
            title: "Choose Additional Toppings",
            isBoolean: false,
            options: [
                {
                    id: "sesame",
                    name: "Sesame Seeds",
                },
                {
                    id: "chili-flakes",
                    name: "Chili Flakes",
                },
                {
                    id: "tomato",
                    name: "Tomatoes",
                },
            ],
            maximumSelectionCount: 2,
        },
    ],
}

export default bagel;