import s from './Book.module.css';
import {FC} from "react";
import {NavLink} from "react-router-dom";

type PropsTypes = {
    name: string,
    year: number,
    genre: string,
    author: string,
    id: number,
    deleteBook: (id: number) => void,
    setEdit: (id: number) => void,
}

const Book: FC<PropsTypes> = (props) =>{
    const{name, year, genre, author, deleteBook, id, setEdit} = props;
    return (
        <div className={s.book}>
            <div><div className={s.delete} onClick={()=>deleteBook(id)}/></div>
            <ul>
                <li>название: {name}</li>
                <li>автор: {author|| "неизвестен"} </li>
                <li>год: {year|| "неизвестен"}</li>
                <li>жанр: {genre|| "неизвестен"}</li>
            </ul>
           <NavLink to="/editor" className={s.edit} onClick={()=> setEdit(id)}/>
        </div>
    )
}

export default Book;
