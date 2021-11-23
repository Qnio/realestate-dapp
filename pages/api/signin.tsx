import {MongoClient, ObjectId} from "mongodb";
import {NextApiRequest, NextApiResponse} from "next";
import {compare, hash} from "bcrypt";
import { sign } from "jsonwebtoken";
import cookie from 'cookie';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'POST') {
        const user = req.body;
        console.log('User data: ', user)

        const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6glta.mongodb.net/home4you?retryWrites=true&w=majority`);
        const db = client.db();

        const users = db.collection('users');
        const isUser = await users.findOne({email: user.email})
        console.log(isUser)

        compare(user.password, isUser?.password, async function (err, result) {
            if (!err && result) {
                const claims = {sub: new ObjectId(isUser?._id), userEmail: isUser?.email};
                const jwt = sign(claims, `${process.env.SECRET_GUID}`, {expiresIn: '1h'});
                res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
                    httpOnly: true,
                    //to bypass localhost 'secure: true' we need to use:
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: 'strict',
                    maxAge: 3600,
                    path: '/'
                }))
                res.json({message: 'You are allow to be here'})
            } else {
                res.json({message: 'Something went wrong!'})
            }
            await client.close();
        });
        // res.status(201).json({message: 'User received!'});
    }
    // res.status(405).json({message: 'Email or password is incorrect!'});
}

export default handler;
