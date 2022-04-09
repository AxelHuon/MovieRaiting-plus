const API = "a5716a59a3e5ffdac2252f9200176efc";

export function getFilmAfterSearch(text, page) {
    const url =
        "https://api.themoviedb.org/3/search/movie?api_key=" +
        API +
        "&language=fr&query=" +
        text +
        "&page=" +
        page;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getImageFilm(name) {
    return "https://image.tmdb.org/t/p/w300" + name;
}

export function getInfosFilm(id) {
    return fetch(
        "https://api.themoviedb.org/3/movie/" +
            id +
            "?api_key=" +
            API +
            "&language=fr"
    )
        .then((response) => response.json())
        .catch((error) => console.error(error));
}
