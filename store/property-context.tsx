import React from 'react';
import {Property, PropertyContextInterface} from "../models/property";


const PropertyContext = React.createContext<PropertyContextInterface>({
    propertyTypes: [],
    states: [],
    market: [],
    cities: [],
    sellType: [],
    properties: [],
    getCities: () => [],
    addProperty: () => {}
});


export default PropertyContext;
