import {Input} from "../FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {addBook} from "../../redux/library-reducer";
import React, {FC} from "react";
import {AppStateType} from "../../redux/redux-store";
import {BookType} from "../../types/types";

type FormValuesType = {
    name: string,
    year: number,
    author: string,
    genre: string
}

const Add:FC<MapStatePropsType&MapDispatchPropsType> = (props)=>{
    const onSubmit = (formData: FormValuesType) => {
        props.addBook(
            {id: props.id, name: formData.name, year: formData.year,
            author: formData.author, genre: formData.genre,
            });
    }
    return(
        <div>
            <h1>Add book:</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}
const AddForm:FC<InjectedFormProps<FormValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <span>Название: </span>
            <Field component={Input} placeholder={'Название'} name={'name'} validate={[required]}/>
            <span>Год издания: </span>
            <Field component={Input} type={'number'}  name={'year'}/>
            <span>Автор: </span>
            <Field component={Input} placeholder={'Писатель'} name={'author'}/>
            <span>Жанр: </span>
            <Field component={Input} placeholder={'Рассказ'} name={'genre'}/>
            {props.error?<div>{props.error}</div>:null}
            <button>Submit</button>
        </form>
    )
}
const ReduxLoginForm = reduxForm<FormValuesType,{}>({form:"add"})(AddForm)
type MapDispatchPropsType = {
    addBook: (book: BookType) => void,
}
type MapStatePropsType = {
    id: number,
}
// eslint-disable-next-line no-undef
const mapStateToProps = (state: AppStateType) => ({
    id: state.libraryPage.nextId,
})
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps, {addBook} )(Add);
