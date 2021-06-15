import {Input} from "../FormsControls/FormsControls";
import {Field, initialize, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {editBook} from "../../redux/library-reducer";
import {FC} from "react";
import {AppStateType} from "../../redux/redux-store";
import {BookType} from "../../types/types";
import {Redirect} from 'react-router-dom'

type FormValuesType = {
    name: string,
    year: number,
    author: string,
    genre: string
}

const Editor: FC<MapStatePropsType&MapDispatchPropsType> = (props)=>{
    props.initialize('editor', props.book);
    if(props.book === undefined) return <Redirect to={'/library'}/>;
    const onSubmit = (formData: FormValuesType) => {
        props.editBook({id: props.book!.id,name: formData.name, year: formData.year,
            author: formData.author, genre: formData.genre,
            });
    }
    return(
        <div>
            <h1>Edit book:</h1>
            <ReduxEditorForm onSubmit={onSubmit}/>
        </div>
    )
}
const EditorForm:FC<InjectedFormProps<FormValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <span>Название: </span>
            <Field component={Input} placeholder={'Название'} name={'name'} validate={[required]}/>
            <span>Год издания: </span>
            <Field component={Input} type={'number'}  name={'year'}/>
            <span>Автор: </span>
            <Field component={Input} placeholder={'text'} name={'author'}/>
            <span>Жанр: </span>
            <Field component={Input} placeholder={'text'} name={'genre'}/>
            {props.error?<div>{props.error}</div>:null}
            <button>Submit</button>
        </form>
    )
}
const ReduxEditorForm = reduxForm<FormValuesType,{}>({form:"editor"})(EditorForm)

type MapDispatchPropsType = {
    editBook: (book: BookType) => void,
    initialize: (form: string, book: BookType | undefined) => void,
}
type MapStatePropsType = {
    book: BookType | undefined ,
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    book: state.libraryPage.editBook,

})
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps, {editBook, initialize} )(Editor);
