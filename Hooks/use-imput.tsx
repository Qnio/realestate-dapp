import React, {useState} from 'react';

const useInput = (validateValue: (value: any) => boolean) => {
    const [inputValue, setInputValue] = useState<any>('');
    const [isTouched, setIsTouched] = useState<boolean>(false);

    const isValid = validateValue(inputValue);
    const hasError = !isValid && isTouched;


    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    }

    const valueBlurHandler = () => {
        setIsTouched(true);
    }

    const setInputIsTouched = () =>{
        setIsTouched(true)
    }

    const clearInputValue = () => {
        setInputValue('');
        setIsTouched(false);
    }

    return {
        value: inputValue,
        hasError,
        isValid,
        valueChangeHandler,
        valueBlurHandler,
        setInputIsTouched,
        clearInputValue
    }
}

export default useInput;
