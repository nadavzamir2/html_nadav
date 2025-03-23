async function fetchJokes() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/ten');
        const jokes = await response.json();
        renderJokes(jokes);
    } catch (error) {
        console.error('Error fetching jokes:', error);
    }
}

const container = document.getElementById('jokesContainer');

function renderJokes(jokes) {
    container.innerHTML = '';
    jokes.forEach(joke => {
        const jokeCard = document.createElement('div');
        jokeCard.classList.add('card');
        jokeCard.innerHTML = `<p><strong>${joke.setup}</strong></p><p>${joke.punchline}</p>`;
        
        const saveBtn = document.createElement('button');
        saveBtn.classList.add('btn');
        saveBtn.innerText = 'Save to Favorites';
        saveBtn.onclick = () => saveToFavorites(joke);
        
        jokeCard.appendChild(saveBtn);
        container.appendChild(jokeCard);
    });
}

function saveToFavorites(joke) {
    let favorites = JSON.parse(localStorage.getItem('favoritesJokes')) || [];
    if (!favorites.some(j => j.id === joke.id)) {
        favorites.push(joke);
        localStorage.setItem('favoritesJokes', JSON.stringify(favorites));
    }
}

fetchJokes();