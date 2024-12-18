document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.trim();
    if (query) {
      fetch(`/api/search?query=${query}`)
        .then(response => response.json())
        .then(data => displayRecipes(data.results))
        .catch(error => console.error('Error fetching recipes:', error));
    }
  });
  
  function displayRecipes(recipes) {
    const container = document.getElementById('recipes-container');
    container.innerHTML = ''; 
    recipes.forEach(recipe => {
      const card = document.createElement('div');
      card.className = 'recipe-card';
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
      `;
      container.appendChild(card);
    });
  }
  