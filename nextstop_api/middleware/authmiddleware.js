    import jwt from 'jsonwebtoken'
    import { secretKey } from '../controller/user/user.js'

    export function verifyToken(req,res,next){
        const token = req.header('Authorization')
        if (!token) return res.status(401).json({ error: 'Access denied' })
            try{
        const decode = jwt.verify(token,secretKey)
        req.email = decode.email
        next()
    }catch(error){
        res.status(401).json({ error: 'Invalid token' })
    }
    }