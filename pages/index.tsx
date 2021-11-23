import React, {useEffect, useState, useContext, useCallback} from 'react';
import { MongoClient } from "mongodb";
import SearchNavForm from "../components/UI/SearchPropertiesBar/SearchBarNavForm/SearchBarNavForm";

import {Property, SearchProperty} from "../models/property";
import PropertySearchView from "../components/UI/Properties/PropertiesSearchView/PropertySearchView";
import PropertyContext from "../store/property-context";
import {GetStaticProps} from "next";





const HomePage: React.FC<{properties: any}> = ({properties}) => {

    const context = useContext(PropertyContext);

    const [searchProperty, setSearchProperty] = useState<SearchProperty>();
    const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getCities = () => {
        return context.cities.map(city => city.city);
    }

    const searchPropertyHandler = async (searchQuery: SearchProperty) => {
        setSearchProperty(searchQuery);
        await filterProperties(searchQuery)
    }



    const filterProperties = async (request: SearchProperty): Promise<Property[]> => {

        const result = await properties.filter((property: Property) => property.marketType.toLowerCase() === request.choseOption.toLowerCase()).filter((property: Property) => {
                if (request.location && !request.propertyType && request.minPrice === 0 && request.maxPrice === 0) {
                    return property.city.toLowerCase() === request.location.toLowerCase()
                } else if (request.location && !request.propertyType && request.minPrice > 0 && request.maxPrice === 0) {
                    return property.city.toLowerCase() === request.location.toLowerCase() &&
                        (property.price >= request.minPrice)
                } else if (request.location && !request.propertyType && request.minPrice > 0 && request.maxPrice > 0) {
                    return property.city.toLowerCase() === request.location.toLowerCase() &&
                        (property.price >= request.minPrice && property.price <= request.maxPrice)
                } else if (request.location && !request.propertyType && request.minPrice === 0 && request.maxPrice > 0) {
                    return property.city.toLowerCase() === request.location.toLowerCase() &&
                        (property.price <= request.maxPrice)
                } else if (request.location && request.propertyType && request.minPrice === 0 && request.maxPrice === 0) {
                    return property.city.toLowerCase() === request.location.toLowerCase() &&
                        property.type.toLowerCase() === request.propertyType.toLowerCase()
                } else if (request.location && request.propertyType && request.minPrice > 0 && request.maxPrice === 0) {
                    return property.city.toLowerCase() === request.location.toLowerCase() &&
                        property.type.toLowerCase() === request.propertyType.toLowerCase() &&
                        property.price >= request.minPrice
                } else if (request.location && request.propertyType && request.minPrice > 0 && request.maxPrice > 0) {
                    return property.city.toLowerCase() === request.location.toLowerCase() &&
                        property.type.toLowerCase() === request.propertyType.toLowerCase() &&
                        property.price >= request.minPrice && property.price <= request.maxPrice
                } else if (request.location && request.propertyType && request.minPrice === 0 && request.maxPrice > 0) {
                    return property.city.toLowerCase() === request.location.toLowerCase() &&
                        property.type.toLowerCase() === request.propertyType.toLowerCase() &&
                        property.price <= request.maxPrice
                }
                return property;
            })
        setFilteredProperties(result);
        return result;
    }

    return (
        <>
            <SearchNavForm locations={getCities()} onSearchProperties={searchPropertyHandler}/>
            <PropertySearchView properties={filteredProperties} isLoading={isLoading}/>
        </>
    )
};

export const getStaticProps: GetStaticProps = async (context) => {

    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6glta.mongodb.net/home4you?retryWrites=true&w=majority`);
    const db = client.db();
    const propertiesCollection = db.collection('home4you');

    const propertiesData = await propertiesCollection.find().toArray();

    await client.close();

    return {
        props: {
            properties: propertiesData.map( (property: any) =>
                ({
                    id: property._id.toString(),
                    bedrooms: property.bedrooms,
                    bathrooms: property.bathrooms,
                    carSpace: property.carSpace,
                    space: property.space,
                    type: property.type,
                    unit: property.unit,
                    streetNumber: property.streetNumber,
                    streetName: property.streetName,
                    streetType: property.streetType,
                    postCode: property.postCode,
                    city: property.city,
                    state: property.state,
                    photos: property.photos,
                    marketType: property.marketType,
                    price: property.price,
                    lat: property.lat,
                    lng: property.lng,
                    description: property.description,
                    sellType: property.sellType
                })
            )
        },
        revalidate: 1
    }
}



export default HomePage;
