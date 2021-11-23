import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import {verify} from "jsonwebtoken";

const authenticated = (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    await verify(req.cookies.auth!, `${process.env.SECRET_GUID}`,  function (err, decoded) {
        if (!err && decoded) {
            return  fn(req, res)
        }
        res.status(500).json({message: 'You are not authenticated!'})
    })
}

export default authenticated;
