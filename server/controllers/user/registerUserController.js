import asyncHandler from 'express-async-handler';
import User from "../../models/userModel.js";




export const registerUser = asyncHandler( async(req, res) => {
    const { email, password } = req.body

    const isHasUser = await User.findOne({ email: email })

    if (isHasUser) {
        res.status(400);
        throw new Error("Данный пользователь уже зарегестрирован")
    }

    const user = await User.create({
        email,
        password,
    })

    

    res.json(user)
})