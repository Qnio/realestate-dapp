import React from "react";
import {Property} from "../../../../models/property";
import PropertyCard from "../PropertyCard/PropertyCard";
import { CardListContainer } from "./PropertiesList.styles";

const PropertiesList: React.FC<{properties?: Property[]}> = (props) => {
    return (
        <CardListContainer>
            {
                props.properties?.map((property: Property) => (
                    <PropertyCard key={Math.random()} property={property} />
                ))
            }
        </CardListContainer>
    )
}

export default PropertiesList;
