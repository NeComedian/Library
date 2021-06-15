import {FC} from "react";
import Book from "./Book/Book";
import s from  "./Library.module.css"
import {BookType} from "../../types/types";

type PropsTypes = {
    books: Array<BookType>,
    deleteBook: (id: number) => void,
    setEdit: (id: number) => void,
}

const Library: FC<PropsTypes>  = (props) =>{
    const booksElements =
        props.books.map( b => <Book name={b.name} year={b.year} deleteBook={(id) => props.deleteBook(id)}
                                    key={b.id} author={b.author} genre={b.genre}
                                    id={b.id} setEdit = {(id) => props.setEdit(id) }/>);
    return (
        <>
            <div className={s.flexContainer}>
                {booksElements}
            </div>
        </>
    )
}

export default Library;
