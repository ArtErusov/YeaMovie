
export interface Movie {
  id: number;
  name: string;
  alternativeName: string | null;
  enName: string | null; // Исправляем тип, чтобы принимать либо строку, либо null
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  status: string | null; // Так как статус может быть null
  rating: Rating;
  votes: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  movieLength: number | null;
  totalSeriesLength: number | null;
  seriesLength: number | null;
  ratingMpaa: string | null;
  ageRating: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  backdrop: {
    url: string;
    previewUrl: string;
  };
  genres: { name: string }[];
  countries: { name: string }[];
  top10: number | null;
  top250: number | null;
  isSeries: boolean;
  ticketsOnSale: boolean;
}


interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: null | number;
}
