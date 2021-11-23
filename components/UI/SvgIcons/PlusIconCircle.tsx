import React from "react";
import   PlusIcon  from '../../../public/plus_circle.svg';

const PlusIconCircle: React.FC<{ size: number}> = (props) => {
    return (
        <div style={{width: `${props.size}px`}}>
            <PlusIcon />
        </div>
    )
}

export default PlusIconCircle;
