import React, {useState} from 'react';

import {
    BackPanel,
    DropdownGroup,
    DropdownContent,
    DropdownLabel,
    DropdownInput
} from './DropdownSearchBar.styles';
import {CustomButton} from "@components/UI/shared";
import {ClearInputButton} from "@components/UI/shared";

const DropdownSearchBar: React.FC<{
    inputType?: string,
    titleText: string,
    isDisabled: boolean,
    value?: string,
    placeholderValue?: string,
    inputValue?: any,
    isError?: boolean,
    onClearInput: () => void,
    onInputChange?: (inputValue: string) => void
}> = (props) => {

    const [isActive, toggleActive] = useState<boolean>(false);
    // const [inputValue, setInputValue] = useState<string>('');

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setInputValue(event.currentTarget.value);
        if(props.onInputChange) {
            props.onInputChange(event.currentTarget.value);
        }
    }

    const toggleDropdown = () => {
        toggleActive(prevIsActive => !prevIsActive)
    }

    const clearInputHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        props.onClearInput();
        // setInputValue('');
    }

    return (
        <>
            <BackPanel onClick={toggleDropdown} active={isActive}/>
            <DropdownGroup active={isActive}>
                <DropdownLabel onClick={toggleDropdown}>
                    {props.titleText}
                    <DropdownInput
                        disabled={props.isDisabled}
                        type={props.inputType || 'text'}
                        value={props.inputValue ? props.inputValue : ''}
                        placeholder={props.placeholderValue}
                        onChange={inputHandler}/>
                    <ClearInputButton clear={!!props.inputValue} onClearInput={clearInputHandler} size={12}/>
                </DropdownLabel>
                {/*<ErrorIconContainer displayError={props.isError}>*/}
                {/*    <AlertCircleIcon size={24}/>*/}
                {/*</ErrorIconContainer>*/}
            </DropdownGroup>
            <DropdownContent active={isActive}>
                {props.children}
                <CustomButton buttonInverted type='button' onClick={toggleDropdown}>OK</CustomButton>
            </DropdownContent>
        </>
    )
};

export default DropdownSearchBar;
