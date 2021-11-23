import {MongoClient} from "mongodb";
import authenticated from "../../services/auth";

const handler = async (req: any, res: any) => {
    if (req.method === 'POST') {

        const data = req.body;
        const address = `${data.unit ? data.unit + '+' : ''}${data.streetNumber}+${data.streetName}+${data.streetType},${data.city},${data.state},${data.postCode}`;

        console.log('Address from getLatLong: ', address)
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_API_KEY}`)
        const geoLocationData = await response.json();
        const propertyGeoLocalisation = geoLocationData.results[0].geometry.location;
        console.log(propertyGeoLocalisation)


        //ADD Property to data base
        const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6glta.mongodb.net/home4you?retryWrites=true&w=majority`);

        const db = client.db();

        const propertiesCollection = db.collection('home4you');
        const result = await propertiesCollection.insertOne({...data, ...propertyGeoLocalisation});

        console.log('Result: ', result);
        //after sending request we are closing connection
        await client.close();

        //code responsible for sending response from db
        res.status(201).json({message: 'Property inserted!'});
    }
};

export default handler;
