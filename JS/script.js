const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const answerLastFilm1 = prompt('Один из последних просмотренных фильмов?');
const answerLastFilmScore1 = prompt('На сколько оцените его?');
const answerLastFilm2 = prompt('Один из последних просмотренных фильмов?');
const answerLastFilmScore2 = prompt('На сколько оцените его?');

personaMovieDB.movies[answerLastFilm1] = answerLastFilmScore1;
personaMovieDB.movies[answerLastFilm2] = answerLastFilmScore2;

console.log(personaMovieDB);
console.log(personaMovieDB.movies);