function init() {
    loadCards(jokes, "jokesContent")
    document.getElementById("total").innerHTML = `Total Jokes: ${getTotalJokes()}`;
    let statsHtml = '';
    const stats = getStats();
    const types = Object.keys(stats);
    for (let index = 0; index < types.length; index++) {
        const type = types[index];
        const count = stats[type];
        statsHtml += `<p>${type} : ${count}</p>`;
    }
    document.getElementById("stats").innerHTML = statsHtml;
    console.log('stats', getStats())
}




function addToFavorites(id) {
    const jokeToFavorite = getJokeObjById(id, jokes)
    if (jokeToFavorite) {
        const favoritesJokesString = localStorage.getItem("favoritesJokes")  // fetch from LS (get)
        if (favoritesJokesString) {
            const favoritesJokesArray = JSON.parse(favoritesJokesString) // JSON.parse 
            const found = getJokeObjById(jokeToFavorite.id, favoritesJokesArray)
            if (!found) {
                favoritesJokesArray.push(jokeToFavorite) // push into array
                const favoritesJokesArrayString = JSON.stringify(favoritesJokesArray)// JSON.stringify
                localStorage.setItem("favoritesJokes", favoritesJokesArrayString)// insert into LS (set)
                alertSuccess()
            } else {
                alertError()
            }
        } else {
            localStorage.setItem("favoritesJokes", JSON.stringify([jokeToFavorite]))
        }
    }

}

function getStats() {
    const stats = {};
    for (let index = 0; index < jokes.length; index++) {
        const type = jokes[index].type;
        if (stats[type] !== undefined) {
            stats[type] = stats[type] + 1;
        } else {
            stats[type] = 1;
        }
    }
    return stats;
}


function getTotalJokes() {
    return jokes.length;
}

function alertSuccess() {
    Swal.fire({
        title: "Added successfully!",
        icon: "success"
    });
}
function alertError() {
    Swal.fire({
        title: "Already added!",
        icon: "error"
    });
}


init()