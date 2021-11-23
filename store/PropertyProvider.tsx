import React, {useState, useReducer} from "react";
import PropertyContext from "./property-context";
import {Property, PropertyContextInterface} from "../models/property";
import Properties from "../models/properties.json";
import {City} from "../models/cities"
import Cities from "../models/au.json";

const LOCATIONS: City[] = [...Cities];
const propertiesData: Property[] = [];

const propertyReducer = (state: Property[], action: { type: string, payload: Property}) => {
    if (action.type === 'ADD_PROPERTY') {
        console.log('ADD_PROPERTY')
        const updatedPropertiesData = state.concat(action.payload);
        console.log(updatedPropertiesData);
        return updatedPropertiesData;
    }
    return propertiesData;
}

const PropertyProvider: React.FC = props => {

    const [propertiesState, dispatchPropertyAction] = useReducer(propertyReducer, propertiesData);


    const getCities = () => {
        return LOCATIONS.map(city => city.city);
    }

    const addProperty = (property: Property) => {
        dispatchPropertyAction({type: 'ADD_PROPERTY', payload: property})
    }

    const propertyContext: PropertyContextInterface = {
        propertyTypes: ['House', 'Unit', 'Land', 'Townhouse', 'Villa'],
        states: ['NSW', 'VIC', 'ACT', 'WA', 'SA', 'NT', 'QLD', 'TAS'],
        market: ['Sell', 'Rent'],
        sellType: ['Auction', 'Fixed Price'],
        cities: LOCATIONS,
        properties: propertiesState,
        getCities,
        addProperty
    }

    return (
        <PropertyContext.Provider value={propertyContext}>{props.children}</PropertyContext.Provider>
    )
}

export default PropertyProvider
