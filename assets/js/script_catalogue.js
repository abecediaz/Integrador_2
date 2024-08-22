const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWJmNWUxMDhlNDFiZjdhZGQ0MWI4NzIxZmEzOWYwOSIsIm5iZiI6MTcyNDI5MDQ4NS4yMjE3MSwic3ViIjoiNjZjNjk0YjE3ZTgxYTkwMTllMzZlNGVlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.CdlGP7BAiHijtJJqTmwuv6FIQSexxObJmk6e0Nygm4w'
    }
};

function extraccion_datos(api_response, div) {
    api_response.forEach(movie => {
        const col_div = document.createElement("div");
        col_div.classList.add("col-4", "col-md-4", "col-lg-2");

        const movie_div = document.createElement("div");
        movie_div.classList.add("movie");

        const movie_poster = document.createElement("img");
        movie_poster.src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
        movie_poster.alt = movie.title;
        movie_poster.classList.add("img-fluid");

        const movie_title = document.createElement("h6");
        movie_title.textContent = movie.title;

        movie_div.appendChild(movie_poster);
        movie_div.appendChild(movie_title);
        col_div.appendChild(movie_div);
        div.appendChild(col_div);
    })
}

/*TRENDING*/
fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
    .then(response => response.json())
    .then(response => {

        const trending_movies = response["results"].slice(0, 6);
        let trending_movies_div = document.getElementById("trending");

        extraccion_datos(trending_movies, trending_movies_div);

    })
    .catch(error => console.error("Error connecting to the API", error));

/*POPULAR*/
fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
    .then(response => response.json())
    .then(response => {

        const popular_movies = response["results"].slice(0, 6);
        let popular_movies_div = document.getElementById("popular");

        extraccion_datos(popular_movies, popular_movies_div);

    })
    .catch(error => console.error("Error connecting to the API", error));

/*UPCOMING*/
fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options)
    .then(response => response.json())
    .then(response => {

        const upcoming_movies = response["results"].slice(0, 6);
        let upcoming_movies_div = document.getElementById("upcoming");

        extraccion_datos(upcoming_movies, upcoming_movies_div);

    })
    .catch(error => console.error("Error connecting to the API", error));