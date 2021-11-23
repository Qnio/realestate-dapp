import React from 'react';

import {MySpinner, SpinnerParagraph} from "./LoadingSpinner.styles";


const LoadingSpinner: React.FC = props => {
    return (
        <>
            <MySpinner>
                <div></div>
                <div></div>
                <div></div>
            </MySpinner>
            <SpinnerParagraph>Loading...</SpinnerParagraph>
        </>
    )
}

export default LoadingSpinner;
