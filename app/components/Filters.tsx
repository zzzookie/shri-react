"use client"

import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react'
import styles from './Filters.module.css'
import SelectPortal from './SelectPortal'
import { CinemaType, FilterType, GenreType } from '../types';

export default function Filters({ genres, cinemas, setFilters }:
  { genres: GenreType, cinemas: CinemaType[], setFilters: Dispatch<SetStateAction<FilterType>> }): JSX.Element {

  const [inputValue, setInputValue] = useState('');
  const titleRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const genreSelectRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const cinemaSelectRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      titleRef.current && updateFilter(titleRef.current)
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  function updateFilter(target: HTMLElement): void {
    if (!(target instanceof HTMLInputElement) && !(target instanceof HTMLSelectElement)) return
    const { name, value } = target
    if (name !== 'title' && name !== 'genre' && name !== 'cinema') return
    setFilters((prev) => {
      const newFilter = { ...prev }
      value !== "" ? newFilter[name] = value : delete newFilter[name]
      return newFilter
    })
  }

  return (
    <div className={`card ${styles.wrapper}`} style={{ alignSelf: 'start' }}>
      <div className={styles.title}>Фильтр поиска</div>
      <form className='fv g1'>

        <div className={styles.inputBlock}>
          <p className={styles.inputTitle}>Название</p>
          <input type="text"
            name="title"
            ref={titleRef}
            onChange={e => setInputValue(e.target.value)}
            className={styles.textInput}
            placeholder="Введите название"
          ></input>
        </div>

        <div className={styles.inputBlock}>
          <p className={styles.inputTitle}>Жанр</p>
          {genres &&
            <SelectPortal
              name='genre'
              options={Object.entries(genres).map(genre => ({ title: genre[1], value: genre[0] }))}
              defaultOption={"Выберите жанр"}
              updateFilter={updateFilter}
              renderContainer={genreSelectRef.current as HTMLElement}
            />}
          <div ref={genreSelectRef} className={styles.selectRenderContainer} />
        </div>

        <div className={styles.inputBlock}>
          <p className={styles.inputTitle}>Кинотеатр</p>
          {cinemas &&
            <SelectPortal
              name='cinema'
              options={cinemas.map(cinema => ({ title: cinema.name, value: cinema.id }))}
              defaultOption={"Выберите кинотеатр"}
              updateFilter={updateFilter}
              renderContainer={cinemaSelectRef.current as HTMLInputElement}
            />}
          <div ref={cinemaSelectRef} className={styles.selectRenderContainer} />
        </div>

      </form >
    </div >
  )
}
