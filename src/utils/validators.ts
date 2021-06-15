export type FieldValidatorType = (value: string) => string | undefined
export const required: FieldValidatorType = (value) =>{
    if(!value) return "У книги должно быть название"
    return undefined
}
