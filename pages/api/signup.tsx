import {MongoClient} from "mongodb";
import {NextApiRequest, NextApiResponse} from "next";
import { hash } from "bcrypt";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if( req.method === 'POST') {
        const user = req.body;
        console.log('User data: ', user)

        const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6glta.mongodb.net/home4you?retryWrites=true&w=majority`);
        const db = client.db();

        const users = db.collection('users');

        hash(user.password, 10, async function(err, hash) {
            await users.insertOne({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: hash
            })
            await client.close();
        });




        // res.status(201).json({message: 'User received!'});
    }
    res.status(401).json({message: 'Wrong API call! DID you forgot POST method?'});
}

export default handler;
