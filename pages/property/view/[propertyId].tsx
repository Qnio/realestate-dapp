import React from "react";
import PropertyView from "../../../components/UI/Properties/Property/PropertyView";
import {MongoClient, ObjectId} from "mongodb";
import {Property} from "../../../models/property";


const ShowPropertyDetails: React.FC<{ property: Property }> = (props) => {
    const {property} = props;
    return (
        <>
            <h1>{property.id}</h1>
            <p>{property.unit}</p>
            <p>{property.streetNumber}</p>
            <p>{property.streetName}</p>
        </>
    )
}

export default ShowPropertyDetails;


export async function getStaticPaths() {
    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6glta.mongodb.net/home4you?retryWrites=true&w=majority`);
    const db = client.db();
    const propertiesCollection = db.collection('home4you');

    const propertyData = await propertiesCollection.find().toArray();
    const paths = propertyData.map(property => ({params: {propertyId: property._id.toString()}}));
    console.log(paths);
    await client.close();

    return {
        paths,
        fallback: false
    }

}


export async function getStaticProps(context: any) {
    const propertyId = context.params.propertyId;
    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6glta.mongodb.net/home4you?retryWrites=true&w=majority`);
    const db = client.db();
    const propertiesCollection = db.collection('home4you');

    const propertyData = await propertiesCollection.findOne({_id: new ObjectId(propertyId)});

    await client.close();

    if(propertyData) {
        return {
            props: {
                property: {
                    id: propertyData._id.toString(),
                    bedrooms: propertyData.bedrooms,
                    bathrooms: propertyData.bathrooms,
                    carSpace: propertyData.carSpace,
                    space: propertyData.space,
                    type: propertyData.type,
                    unit: propertyData.unit,
                    streetNumber: propertyData.streetNumber,
                    streetName: propertyData.streetName,
                    streetType: propertyData.streetType,
                    city: propertyData.city,
                    state: propertyData.state,
                    photos: propertyData.photos,
                    marketType: propertyData.marketType,
                    price: propertyData.price

                }
            }
        }
    }
    return {}
}
