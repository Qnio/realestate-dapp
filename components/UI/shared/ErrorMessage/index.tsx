import React from 'react';
import { ErrorParagraph } from './ErrorMessage.styles'


const ErrorMessage: React.FC<{ message: string}> = (props) => {
    return (
        <ErrorParagraph>{props.message}</ErrorParagraph>
    )
}

export default ErrorMessage;
