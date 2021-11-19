require("dotenv").config();
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
    },
    login: async(req,res)=>{
        try{
            const {email, mdp} = req.body
            if (!email || !mdp){
                return res.status(204).json({msg:"Tout les champs ne sont pas remplis"});
            }
            const user = await userModel.findOne({email});
            if (user && (await bcrypt.compare(mdp, user.mdp))){
                const token = jwt.sign(
                    {user_id: user._id},
                    process.env.PRIVATE_KEY,
                    {expiresIn:"1h"}
                )
                user.token = token;
                res.status(200).json({user})
            }
            else {
                res.status(400).json({msg:"Votre email ou votre mot de passe n'est pas correct"})
            }
        }
        catch(err){
            console.log(err);
        }
    }

}
