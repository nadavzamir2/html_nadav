// # Ex 23.2 + Homework

// 1. use the following json data in the folder
// 2. draw the cards with the following info: 
// "Title",
// "Year",
// "Rated",
// "Released",
// "Runtime",
// "Genre",
// "Director",
// "Writer",
// "image" - image
// "imdbRating" - icon stars
// "imdbVotes" - number
// "imdbID" - id
//  "Type" - string

// 3. add statistics pie chart with the types and number of movies\series for example {movies: 5, series: 2}
// 4. each movie has few images, support paging between the movies, button next/prev to switch between movies.
// 5. support adding movie to favorite, delete from favorite
function init() {
    const firstMovieId = data[0].imdbID;
    setMovieCardById(firstMovieId);
}

function getMovieIndexById(imdbID) {
    for (let index = 0; index < data.length; index++) {
        if (data[index].imdbID === imdbID) {
            return index;
        }
    }
    return null;
}

function setCardContent(content) {
    document.getElementById("movieCard").innerHTML = content;
}

function generateCardContent(movie) {
    let content = "";

    content += `<h1>${movie.Title}</h1>`;
    content += `<h2>Year: ${movie.Year}</h2>`;
    content += `<h3>Released: ${movie.Released}</h3>`;
    content += `<h3>Runtime: ${movie.Runtime}</h3>`;
    content += `<h4>Genre: ${movie.Genre}</h4>`;
    content += `<h4>Director: ${movie.Director}</h4>`;
    content += `<h4>Writer: ${movie.Writer}</h4>`;
    content += `<h4>Actors: ${movie.Actors}</h4>`;
    content += `<h4>Language: ${movie.Language}</h4>`;
    content += `<h4>Country: ${movie.Country}</h4>`;
    content += `<h4>Awards: ${movie.Awards}</h4>`;
    content += `<h5>Poster: ${movie.Poster}</h5>`;
    content += `<h4>Metascore: ${movie.Metascore}</h4>`;
    content += `<h5>imdbRating: ${movie.imdbRating}</h5>`;
    content += `<h5>imdbVotes: ${movie.imdbVotes}</h5>`;
    content += `<h5>imdbID: ${movie.imdbID}</h5>`;
    content += `<h5>Type: ${movie.Type}</h5>`;
    content += `<h5>Response: ${movie.Response}</h5>`;
    content += `<h5>Images: ${movie.Images}</h5>`;





    

    return content;
}


function setMovieCardById(imdbID) {
    const movieIndex = getMovieIndexById(imdbID);
    if (movieIndex === null) {
        throw Error(`There is no movie with imdbID: ${imdbID}`);
    }
    const movie = data[movieIndex];
    const cardContent = generateCardContent(movie);
    setCardContent(cardContent);
    updateButtons(movieIndex);
}

function setButtonAsDisabled(buttonId) {
    document.getElementById(buttonId).setAttribute("disabled", "");
}

function setButtonAsActiveById(buttonId, movieId) {
    document.getElementById(buttonId).removeAttribute("disabled");
    document.getElementById(buttonId).setAttribute("onClick", `setMovieCardById('${movieId}')`);
}

function updateButtons(movieIndex) {
    const prevIndex = movieIndex-1;
    if (movieIndex === 0) {
        setButtonAsDisabled('buttonPrev');
    } else {
        const prevId = data[prevIndex].imdbID;
        setButtonAsActiveById('buttonPrev', prevId);
    }

    const nextIndex = movieIndex+1;
    if (movieIndex === data.length - 1) {
        setButtonAsDisabled('buttonNext');
    } else {
        const nextId = data[nextIndex].imdbID;
        setButtonAsActiveById('buttonNext',nextId);
    }
}
init();