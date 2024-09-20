import { userModel } from '../../schema/user/usersch.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const secretKey = 'secret-key'

export const register = async (req, res) => {
    try {
        const { fullname, email, password } = req.body
        const existingUser = await userModel.find({ email: email })
        if (existingUser.length > 0) {
            return res.json({
                success: true,
                message: "user already exists"
            })
        } else {
            const hashPassword = await bcrypt.hash(password,10)
            const userDetails = new userModel({
                fullname,
                email,
                password:hashPassword
            })
            const saveDetails = await userDetails.save()
            return res.json({
                success: true,
                message: "user already exists",
                saveDetails
            })
        }

    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
   try{
    const { email, password } = req.body

    const user = await userModel.find({ email: email })

    if (!user) {
        return res.status(401).json({ error: 'Authentication failed' })
        }
    const validPassword = await bcrypt.compare(password,user[0].password)
    if (!validPassword) {
        return res.status(401).json({ error: 'Authentication failed' });
        }

        const token = jwt.sign({email:user[0].email},secretKey,{expiresIn: '1h',})
        res.status(200).json({ token });

   
   }catch(error){
    res.status(500).json({ error: 'Login failed' });

   }
}

export const profile = async (req,res)=>{
    console.log('test')
    res.status(200).json({ message: 'Protected route accessed' });

}

