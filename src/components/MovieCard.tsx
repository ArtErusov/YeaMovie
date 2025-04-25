import { FC } from 'react';
import { Movie } from '../types/types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <li key={movie.id} className="w-80 h-[536px]  overflow-hidden cursor-pointer">
      <img src={movie.poster.url} alt={movie.name} className="w-full h-[473px] object-cover" />

      <h3 className="text-[#080423] mt-1 font-bold truncate">{movie.name}</h3>
      <div className="flex justify-between items-center mt-1">
        <p className="text-[#B7B7B7]  text-[16px]">{movie.year}</p>
        <p className="text-[#FFD233]  font-bold text-[18px]">
          {`${movie.rating.kp.toFixed(1)} / 10`}
        </p>
      </div>
    </li>
  );
};

export default MovieCard;
