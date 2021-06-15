import Library from "./Library";
import {connect} from "react-redux";
import {deleteBook, setEdit} from "../../redux/library-reducer";
import {AppStateType} from "../../redux/redux-store";
import {BookType} from "../../types/types";

type MapDispatchPropsType = {
    deleteBook: (id: number) => void,
    setEdit: (id: number) => void,
}

type MapStatePropsType = {
    books: Array<BookType>,
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        books: state.libraryPage.books,
    }
}

const LibraryContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps,{deleteBook, setEdit})(Library);
export default LibraryContainer;
