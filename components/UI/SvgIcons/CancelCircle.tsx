import React from "react";
import CancelCircleIcon from "../../../public/clear_circle.svg";


const CancelCircle: React.FC<{ size?: number }> = (props) => {
    return (
        <CancelCircleIcon style={{width: `${props.size}px`}}/>
    )
}

export default CancelCircle;
