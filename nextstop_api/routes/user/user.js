import express from 'express'
const router = express.Router()
import { userModel } from '../../schema/user/usersch.js'

// router.post('/register',async (req,res)=>{
//     try{
//         const {fullname,email,password} = req.body
//         const existingUser = await userModel.find({email:email})
//         if(existingUser){
//             res.json({
//                 success:true,
//                 message:"user already exists"
//             })
//         }
//         const userDetails = new userModel({
//             fullname,
//             email,
//             password
//         })
//         const saveDetails = await userDetails.save()
//         res.json({
//             success:true,
//             message:"user already exists",
//             saveDetails
//         })
//     }catch(error){
//         console.log(error)
//     }
// })

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
            const userDetails = new userModel({
                fullname,
                email,
                password
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
    const { email, password } = req.body

    const user = await userModel.find({ email: email })

    if (user.length <= 0) {
        return res.json({
            success: false,
            message: 'user not found'
        })
    }
    if (user[0].password == password) {
        return res.json({
            success: true,
            user
        })
    }

    return res.json({
        success: false,
        message: 'invalid credential'
    })
}

export default router