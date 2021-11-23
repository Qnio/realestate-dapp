import {MongoClient, ObjectId} from "mongodb";
import {NextApiRequest, NextApiResponse} from "next";
import authenticated  from "../../services/auth";

const handler = authenticated(async (req: NextApiRequest, res: NextApiResponse) => {
    if( req.method === 'GET') {
        const data = req.body;
        const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6glta.mongodb.net/home4you?retryWrites=true&w=majority`);
        const db = client.db();
        const propertiesCollection = db.collection('users');
        //console.log(data)
        const userProperties = await propertiesCollection.find({_id: new ObjectId(data.id)}).toArray();
        // console.log(userProperties);
        await client.close();
        res.json(userProperties);
        res.status(200).json({message: 'All OK in user-property connection'})
    } else {
        res.status(505).json({message: 'Something went wrong in user-properties API'})
    }

});

export default handler;
