import Banner from '../components/Banner';
import Header from '../components/layout/Header';
import { useState } from 'react';
import moviesData from '../data/movies.json';
import { Movie } from '../types/types';
import MovieCard from '../components/MovieCard';

// const apiKey = import.meta.env.VITE_KINOPOISK_API_KEY;

function HomePage() {
  type Category = {
    name: string;
    id: number;
  };

  const categories: Category[] = [
    { name: 'Популярные фильмы', id: 12 },
    { name: 'Популярные сериалы', id: 23 },
    { name: 'Подборка фильмов', id: 34 },
  ];
  const [activeId, setActiveId] = useState<number>(12);
  // const [movies, setMovies] = useState<Movie[]>(moviesData);
  const movies: Movie[] = moviesData;

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?rating.kp=1-10', {
  //         headers: {
  //           'X-API-KEY': apiKey,
  //         },
  //       });

  //       const data: MovieResponse = await response.json();
  //       setMovies(data.docs);
  //     } catch (error) {
  //       console.error('Ошибка при получении фильмов:', error);
  //     }
  //   };

  //   fetchMovies();
  // }, []);

  console.log(movies);
  return (
    <>
      <Header />
      <Banner />
      <div className="w-[1320px] mx-auto">
        <ul className="flex space-x-4 mt-[60px]">
          {categories.map((item) => (
            <li
              onClick={() => setActiveId(item.id)}
              className={`${
                activeId === item.id
                  ? 'text-white bg-[#080423]  font-bold'
                  : 'cursor-pointer text-gray-500 hover:text-white hover:bg-[#080423] hover:font-bold'
              } w-64 h-11 flex items-center justify-center rounded-4xl`}
              key={item.id}
            >
              {' '}
              {item.name}
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-2 gap-6 md:grid-cols-2 mt-14 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </ul>

        {/* <div>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                {movie.name} ({movie.year})
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </>
  );
}

export default HomePage;
