import recipes from '../data/recipes.json' with { type: 'json' };


let recipeCards = document.querySelector('.recipe-cards')


recipes.forEach((recipe) => {
    recipeCards.innerHTML += `
        <div class="recipe-card">
        <img src="${recipe.image.large}" alt="">
        <h3 class="recipe-title">${recipe.title}</h3>
        <p class="recipe-briefDescription">${recipe.overview}</p>
        <div class="recipe-info">
          <span>Serving: ${recipe.servings}</span>
          <span>Prep: ${recipe.prepMinutes} mins</span>
          <span>Cook: ${recipe.cookMinutes} mins</span>
        </div>
        <a href="#">View Recipe</a>
      </div>
    `
})