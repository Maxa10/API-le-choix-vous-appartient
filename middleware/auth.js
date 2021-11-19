require("dotenv").config();
const jwt = require("jsonwebtoken");
const verifyToken = (req,res,next)=>{
    const token = req.headers["x-access-token"]
    if (!token){
        return res.status(403).json({msg:"No token provided"})
    }
    try{
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY)
        req.user = decoded
    } 
    catch (err){
       return res.status(420).json({msg:"erreur pendant la verification du token"})
    }
    return next()
}
module.exports = verifyToken