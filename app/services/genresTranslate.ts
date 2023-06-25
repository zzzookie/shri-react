function getRusGenre(engGenre: string): string {
  const genresTranslate: {
    [key: string]: string
  } = {
    fantasy: 'Фэнтези',
    horror: 'Хоррор',
    action: 'Боевик',
    comedy: 'Комедия'
  }

  return genresTranslate[engGenre]
    ? genresTranslate[engGenre]
    : engGenre
}

export default getRusGenre
