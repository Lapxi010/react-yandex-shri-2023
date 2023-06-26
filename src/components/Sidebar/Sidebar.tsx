'use client'

import styles from './Sidebar.module.css'
import {CustomSelect} from "@/components/CustomSelect/CustomSelect";
import {useGetCinemasQuery} from "@/redux/services/movieApi";
import {Loader} from "@/components/Loader/Loader";
import {genres} from "@/utils/genreForFilms";
import {FC} from "react";

interface SidebarT {
    setInput: Function,
    setGenre: Function,
    setCinema: Function
}

export const Sidebar: FC<SidebarT> = ({setInput, setGenre, setCinema}) => {
    const {data, isLoading} = useGetCinemasQuery()

    if (isLoading) {
        return  <Loader/>
    }

    return (
        <div className={styles.menu}>
            <span className={styles.title}>Фильтр поиска</span>
            <form className={styles.form}>
                <div className={styles.block}>
                    <label className={styles.label}>Название</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder={'Введите название'}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                    />
                </div>
                <div className={styles.block}>
                    <label className={styles.label}>Жанр</label>
                    <CustomSelect data={genres} placeholder={'Выберите жанр'} setValue={setGenre}/>
                </div>
                <div className={styles.block}>
                    <label className={styles.label}>Кинотеатр</label>
                    <CustomSelect data={data} placeholder={'Выберите кинотеатр'} setValue={setCinema}/>
                </div>
            </form>
        </div>
    )
}