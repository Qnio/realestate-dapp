import React from "react";
import {Property} from "../../../../models/property";
import {PropertyViewContainer} from "./PropertyView.styles";


const PropertyView: React.FC<{property: Property}> = (props) => {
    return (
        <PropertyViewContainer>
            <h2>{props.property.id}</h2>
        </PropertyViewContainer>
    )
}

export default PropertyView;
