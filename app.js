// Simulate dynamic content load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');

    // Image load effect for recipe detail page
    const recipeImage = document.querySelector('.recipe-detail img');
    
    if (recipeImage) {
        recipeImage.addEventListener('load', () => {
            recipeImage.classList.add('loaded');
        });
    }
});
