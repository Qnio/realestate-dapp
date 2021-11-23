import React from "react";
import  MinusIcon from '../../../public/minus_circle.svg'

const MinusIconCircle: React.FC<{ size?: number }> = (props) => {
    return (
        <div style={{ width: `${props.size}px` }}>
            <MinusIcon />
        </div>
    )
}

export default MinusIconCircle;
