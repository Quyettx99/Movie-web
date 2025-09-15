import { useState, useEffect } from "react";
import Header from "../src/conponents/Header";
import Banner from "../src/conponents/Banner";
import MovieList from "./conponents/MovieList";
import MovieSearch from "./conponents/MovieSearch";
import { MovieProvider } from "./context/MovieProvider";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fechMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi-US&page=1";

      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi-US&page=1";

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fechMovie();
  }, []);

  return (
    <>
      <MovieProvider>
        <div className="bg-black pb-10">
          <Header onSearch={handleSearch} />
          <Banner></Banner>
          {movieSearch.length > 0 ? (
            <MovieSearch title={"Kết quả tìm kiếm"} data={movieSearch} />
          ) : (
            <>
              <MovieList title={"Phim Hot"} data={movie} />
              <MovieList title={"Phim Đề Cử"} data={movieRate} />
            </>
          )}
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
