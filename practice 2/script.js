'use strict';

const numberOfFilms = +prompt("Сколько фильмов посмотрели?");

const personalMovieDB = {
    "count": numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i=0; i < 2; i++){
    let a, b;
    a = prompt('Один из последних просмотренных фильмов?', '');
    b = +prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);
