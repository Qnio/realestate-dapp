import React from "react";
import {CustomButton} from "@components/UI/shared";

import { ClearInputContainer } from "./ClearInputButton.styles";
import CancelCircle from "../../../SvgIcons/CancelCircle";



const ClearInputButton: React.FC<{ clear: boolean, size?: number, onClearInput: (event: React.MouseEvent<HTMLButtonElement>) => void }> = props => {

    return (
        <ClearInputContainer isClearable={props.clear}>
            <CustomButton iconBtnWrapper type='button' onClick={props.onClearInput}>
                <CancelCircle size={props.size}/>
            </CustomButton>
        </ClearInputContainer>
    )
}

export default ClearInputButton;
