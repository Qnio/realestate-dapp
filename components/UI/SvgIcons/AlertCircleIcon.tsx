import React from "react";
import AlertCircle  from '../../../public/alert-circle.svg';

const AlertCircleIcon: React.FC<{ size: number }> = props => {
    return (
        <AlertCircle style={{width: `${props.size}px`}}/>
    )
}
