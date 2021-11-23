import {City} from "./cities";

export interface Property {
    id?: string,
    type: string;
    unit?: string;
    bedrooms: number,
    bathrooms: number,
    carSpace?: number,
    space: number,
    streetNumber: string;
    streetName: string;
    streetType: string;
    postCode: string;
    city: string;
    state: string;
    photos: string[];
    marketType: string;
    price: number;
    lat: number;
    lng: number;
    sellType: string;
    description: string;
}

export interface SearchProperty {
    location: string;
    propertyType: string;
    minPrice: number;
    maxPrice: number;
    choseOption: string;
}

export interface PropertyContextInterface {
    propertyTypes: string[];
    states: string[];
    market: string[];
    cities: City[];
    sellType: string[];
    properties: Property[];
    getCities: () => string[]
    addProperty: (property: Property) => void
}

