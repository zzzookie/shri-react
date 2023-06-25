export interface MovieType {
  id: string,
  title: string,
  posterUrl: string,
  releaseYear: number,
  description: string,
  genre: string,
  rating: number,
  director: string,
  reviewIds: ReviewType[],
}

export interface ReviewType {
  id: string,
  name: string,
  text: string,
  rating: number,
  avatarUrl?: string,
}

export interface GenreType {
  [key: string]: string
}

export interface FilterType {
  title?: string,
  genre?: string,
  cinema?: string,
}

export interface CinemaType {
  id: string,
  name: string,
  movieIds: string[],
}
