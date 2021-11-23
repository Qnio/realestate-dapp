import React from "react";
import AddForm from "../AddForm/AddForm";
import { AddPropertyContainer} from "./AddProperty.styles";

const AddProperty: React.FC = () => {
    return (
        <AddPropertyContainer>
            <AddForm />
        </AddPropertyContainer>

    )
}

export default AddProperty;
