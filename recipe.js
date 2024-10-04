document.addEventListener('DOMContentLoaded', () => {
    const recipeData = {
        1: {
            name: "Hyderabadi Biryani",
            image: "assets/hyderabadi biryani.jpeg",
            description: "Hyderabadi Biryani is a world-famous rice dish made with basmati rice, tender meat, and fragrant spices. It is known for its rich flavors and delicious aroma.",
            ingredients: [
                "2 cups basmati rice",
                "500g chicken or lamb",
                "2 onions, thinly sliced",
                "2 tomatoes, chopped",
                "1/2 cup yogurt",
                "Spices: cinnamon, cloves, cardamom, bay leaf",
                "1 tsp garam masala",
                "1 tsp turmeric",
                "1 tbsp ginger garlic paste",
                "Fresh coriander and mint leaves"
            ],
            instructions: [
                "Wash and soak basmati rice for 30 minutes.",
                "In a large pot, heat oil and fry the onions until golden brown.",
                "Add ginger garlic paste, tomatoes, and spices, then cook until the tomatoes soften.",
                "Add marinated meat and yogurt. Cook until the meat is tender.",
                "In another pot, cook the rice with whole spices until it's 70% cooked.",
                "Layer the meat mixture and half-cooked rice, cover, and steam for 20 minutes.",
                "Garnish with coriander, mint, and serve with raita."
            ]
        },
        2: {
            name: "Butter Chicken",
            image: "assets/butter chicken.jpeg",
            description: "Butter Chicken is a rich and creamy dish that has its origins in Northern India. The chicken is marinated and cooked in a flavorful tomato and butter-based gravy.",
            ingredients: [
                "500g chicken (boneless)",
                "1 cup yogurt",
                "1 tbsp ginger garlic paste",
                "1 tsp red chili powder",
                "2 tbsp butter",
                "1 onion, finely chopped",
                "2 tomatoes, pureed",
                "1/2 cup cream",
                "Spices: garam masala, cumin, turmeric",
                "Fresh coriander for garnish"
            ],
            instructions: [
                "Marinate the chicken with yogurt, spices, and ginger garlic paste for at least 1 hour.",
                "Grill or pan-fry the chicken until cooked through and set aside.",
                "In a pan, heat butter, fry onions until golden, and add tomato puree.",
                "Add cream and spices, and cook for a few minutes.",
                "Add grilled chicken and simmer for 10 minutes.",
                "Garnish with coriander and serve with naan or rice."
            ]
        },
        3: {
            name: "Paneer Tikka",
            image: "assets/paneer tikka.jpeg",
            description: "Paneer Tikka is a popular Indian appetizer made with marinated paneer (cottage cheese) grilled or baked to perfection. It’s smoky, flavorful, and delicious.",
            ingredients: [
                "200g paneer, cut into cubes",
                "1/2 cup yogurt",
                "1 tbsp ginger garlic paste",
                "1 tsp cumin powder",
                "1 tsp turmeric",
                "1 tsp chili powder",
                "1 tsp garam masala",
                "1 tbsp lemon juice",
                "2 tbsp oil",
                "Vegetables: bell peppers, onions (optional)"
            ],
            instructions: [
                "In a bowl, mix yogurt, spices, ginger garlic paste, and lemon juice to make a marinade.",
                "Add paneer cubes and marinate for at least 30 minutes.",
                "Skewer the paneer and vegetables (if using) and grill them until golden brown.",
                "Serve hot with mint chutney."
            ]
        },
        4: {
            name: "Masala Dosa",
            image: "assets/masala dosa 1.jpeg",
            description: "Masala Dosa is a crispy, savory crepe filled with a spiced potato filling. It’s one of the most popular South Indian breakfast dishes.",
            ingredients: [
                "1 cup dosa batter",
                "2 boiled potatoes, mashed",
                "1 onion, finely chopped",
                "1 tsp mustard seeds",
                "1 tsp cumin seeds",
                "1/2 tsp turmeric",
                "1 tsp curry leaves",
                "1 tbsp oil",
                "Fresh coriander for garnish"
            ],
            instructions: [
                "Heat oil in a pan and add mustard seeds, cumin seeds, and curry leaves.",
                "Add onions and cook until soft. Then add mashed potatoes, turmeric, and salt.",
                "Cook for 5 minutes and set aside.",
                "Spread dosa batter on a hot tawa (griddle) and cook until crispy.",
                "Place the potato filling inside the dosa, fold, and serve with coconut chutney."
            ]
        },
        5: {
            name: "Rogan Josh",
            image: "assets/rogan josh.jpeg",
            description: "Rogan Josh is a flavorful Kashmiri curry made with tender lamb, cooked in a rich and aromatic sauce. It's a signature dish from the region of Kashmir.",
            ingredients: [
                "500g lamb (bone-in or boneless)",
                "2 onions, finely sliced",
                "2 tomatoes, chopped",
                "1/2 cup yogurt",
                "1 tsp ginger garlic paste",
                "1 tsp red chili powder",
                "1 tsp cumin",
                "1 tsp turmeric",
                "Spices: cinnamon, cardamom, bay leaf",
                "Fresh coriander for garnish"
            ],
            instructions: [
                "In a pot, heat oil and sauté onions until golden brown.",
                "Add ginger garlic paste, tomatoes, and spices, and cook until the tomatoes soften.",
                "Add lamb and cook until browned.",
                "Add yogurt and simmer until the lamb is tender.",
                "Garnish with fresh coriander and serve with naan or rice."
            ]
        }
    };

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const recipeId = urlParams.get('id');
    const recipe = recipeData[recipeId];

    if (recipe) {
        const recipeContent = document.getElementById('recipe-content');
        recipeContent.innerHTML = `
            <h1>${recipe.name}</h1>
            <img src="${recipe.image}" alt="${recipe.name}">
            <p>${recipe.description}</p>
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions</h3>
            <ol>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        `;
    } else {
        document.getElementById('recipe-content').innerHTML = "<p>Recipe not found.</p>";
    }
});
