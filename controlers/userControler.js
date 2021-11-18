const userModel = require("../models/userModel");

module.exports = {
    getAllUsers: async(req,res)=>{
        const users = await userModel.find();
        res.status(200).json({users})
    },
    postUser: async(req,res)=>{
        const user = await userModel.create({
            email: 'Max@gmail.com',
            mdp: 'test8888', 
        });
        res.status(201).json({user})
    }
}
