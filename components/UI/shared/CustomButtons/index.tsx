import React from 'react';
import {CustomButtonStyle} from './Button.styles';

const CustomButton: React.FC<any> = (props) => {
    return (
        <CustomButtonStyle {...props}  onClick={props.onClick}>{props.children}</CustomButtonStyle>
    )
}

export default CustomButton;
