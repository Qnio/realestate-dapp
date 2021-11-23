import React, {useState} from "react";
import {
    DropdownBackdrop,
    DropdownGroup,
    DropdownLabel,
    DropdownInput,
    DropdownContent
} from "./Dropdown.styles";


const Dropdown: React.FC<{
    label: string,
    placeholder: string,
    value: string,
    type?: string,
    onInputChange?: (inputValue: string) => void,
    onClearInput: () => void
}> = props => {

    const [isActive, setIsActive] = useState(false);

    const toggleIsActive = () => {
        console.log('isActive changed!!!', isActive)
        setIsActive(!isActive);
    }

    const inputValueHandler = (event: React.FormEvent<HTMLInputElement>) => {
        if (props.onInputChange) {
            props.onInputChange(event.currentTarget.value)
        }
    }


    return (
        <>
            <DropdownBackdrop active={isActive} onClick={toggleIsActive}/>
            <DropdownGroup onClick={toggleIsActive}>
                <DropdownLabel>{props.label}</DropdownLabel>
                <DropdownInput placeholder={props.placeholder}
                               value={props.value}
                               type={props.type}
                               onChange={inputValueHandler}
                               autoComplete='nope'
                               opened={isActive}
                />
                <DropdownContent active={isActive} onClick={toggleIsActive}>{props.children}</DropdownContent>
            </DropdownGroup>

        </>
    )
}

export default Dropdown;
