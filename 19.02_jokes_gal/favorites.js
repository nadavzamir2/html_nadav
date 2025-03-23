
function init() {
    const favoritesJokesString = localStorage.getItem("favoritesJokes")
    const favoritesJokesArray = JSON.parse(favoritesJokesString)
    loadCards(favoritesJokesArray, "jokesContentFavorites", "remove")
    document.getElementById("totalFav").innerHTML = `Total Favorites: ${getTotalFavJokes()}`
}

init()

function removeFromFavorites(id) {
    const favoritesJokesString = localStorage.getItem("favoritesJokes")
    if (favoritesJokesString) {
        const favoritesJokesArray = JSON.parse(favoritesJokesString)
        const jokeIndex = getJokeIndexById(id, favoritesJokesArray)
        if (jokeIndex !== undefined) {
            favoritesJokesArray.splice(jokeIndex, 1)
            const favoritesJokesArrayString = JSON.stringify(favoritesJokesArray)
            localStorage.setItem("favoritesJokes", favoritesJokesArrayString)
            init()
        }

    }
}

function getTotalFavJokes() {
    const favoritesJokesString = localStorage.getItem("favoritesJokes");
    if (favoritesJokesString) {
        const favoritesJokesArray = JSON.parse(favoritesJokesString)
        return favoritesJokesArray.length;
    } else {
        return 0;
    }
}

function getStats() {
    const stats = {};
    for (let index = 0; index < favoritesJokesArray.length; index++) {
        const type = favoritesJokesArray[index].type;
        if (stats[type] !== undefined) {
            stats[type] = stats[type] + 1;
        } else {
            stats[type] = 1;
        }
    }
    return stats;

}
   