import Banner from '../components/Banner';
import Header from '../components/layout/Header';
// import { useState } from 'react';
import moviesData from '../data/movies.json';
import { Movie } from '../types/types';

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
        <ul>
          {categories.map((item) => (
            <li key={item.id}> {item.name}</li>
          ))}
        </ul>

        <div>
          <h2 className="text-2xl mb-4">Фильмы с рейтингом IMDb 8+</h2>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                {movie.name} ({movie.year})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomePage;
