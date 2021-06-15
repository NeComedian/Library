import {BookType} from "../types/types";

const DELETE_BOOK = "delete-book"
const ADD_BOOK = "add-book"
const EDIT_BOOK = "edit-book"
const SET_EDIT = "set-edit"

const initialState= {
    books: [
        {id: 1, name: 'книга1', year: 2002, genre: "рассказ", author:"он"},
        {id: 2, name: 'книга2', year: 412, genre: "повесть", author:"она"},
        {id: 3, name: 'книга3', year: 43, genre: "стихи", author:"оно"},
        {id: 4, name: 'книга4', year: 1334, genre: "стихи", author:"они"},
        {id: 5, name: 'книга5', year: 1255, genre: "роман", author:""},
    ] as Array<BookType>,
    nextId : 6,
    editBook: undefined as BookType | undefined
}

type InitialStateType = typeof initialState;

const libraryReducer = (state = initialState, action: ActionTypes): InitialStateType  => {
    switch(action.type) {
        case DELETE_BOOK:
            return{
                ...state,
                books: state.books.filter((book) => book.id !== action.id),
            }
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, {...action.book}],
                nextId: ++state.nextId,
            }
        case EDIT_BOOK:
            return{
                ...state,
                books: [...state.books.map(item => item.id === action.book.id?action.book:item)]
            }
        case SET_EDIT:
            return {
                ...state,
                editBook: state.books.find((item)=>item.id === action.id)
            }
        default:
            return state;
    }
}
type ActionTypes = DeleteBookActionType | AddBookActionType | EditBookActionType | SetEditActionType;
type DeleteBookActionType = {
    type: typeof DELETE_BOOK,
    id: number,
}
export const deleteBook = (id: number): DeleteBookActionType => ({type: DELETE_BOOK, id: id});
type AddBookActionType = {
    type: typeof ADD_BOOK,
    book: BookType,
}
export const addBook = (book: BookType): AddBookActionType => ({type: ADD_BOOK, book: book});
type EditBookActionType = {
    type: typeof EDIT_BOOK,
    book: BookType,
}
export const editBook = (book: BookType): EditBookActionType => ({type: EDIT_BOOK, book: book})
type SetEditActionType = {
    type: typeof SET_EDIT,
    id: number,
}
export const setEdit = (id: number): SetEditActionType => ({type: SET_EDIT, id: id})
export default libraryReducer;
