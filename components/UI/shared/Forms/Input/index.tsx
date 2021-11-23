import React from "react";
import {InputGroup, InputField, Label, TextAreaField} from "./Input.styles";
import {ClearInputButton} from "@components/UI/shared";

// input: {
//     id: '7872';
//     type: 'text';
//     ...
// }

const Input: React.FC<{
    input: any,
    label: string,
    type?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: () => void,
    onClearInput?: () => void
}> = (props) => {

    const clearInputHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (props.onClearInput) {
            props.onClearInput();
        }
        // setInputValue('');
    }
    return (props.type === 'textarea') ?
        (
            <InputGroup>
                <Label htmlFor={props.input.id}>{props.label}</Label>
                <TextAreaField {...props.input} onChange={props.onChange} onBlur={props.onBlur} />
                <ClearInputButton clear={!!props.input.value} onClearInput={clearInputHandler} size={18}/>
            </InputGroup>
        ) : (
            <InputGroup>
                <Label htmlFor={props.input.id}>{props.label}</Label>
                <InputField {...props.input} onChange={props.onChange} onBlur={props.onBlur} />
                <ClearInputButton clear={!!props.input.value} onClearInput={clearInputHandler} size={18}/>
            </InputGroup>
        )


}

export default Input;
