//const { options } = require("pg/lib/defaults");

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=380f39b98db9dfc4c52917ac049d5420&page=1";

  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=380f39b98db9dfc4c52917ac049d5420&query="'


const form = document.getElementById("form");
const search = document.getElementById("search");


  async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
  }

  getMovies(API_URL);

  form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    }else{
        window.location.reload();
    }
  })