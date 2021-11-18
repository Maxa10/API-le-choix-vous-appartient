const mongoose = require ("mongoose")
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"l'email est requis"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Merci de fournir un email valide',
        ],
        unique:[true,"cette adresse est déjà utilisé"]
    },
    mdp:{
        type:String,
        required:[true,"le mot de passe est requis"],
        minlength:[8,"le mot de passe doit contenir minimum 8 caractères"],
        maxlength:[32,"le mot de passe peut contenir maximum 32 caractères"]
    },
    userName:{
        type:String,
        minlength:[5,"le nom d'utilisateur doit contenir minimum 5 caractères"],
        maxlength:[15,"le nom d'utilisateur peut contenir que 15 caractères maximum"]
    },
    role:{
        type:String,
        default:"visiteur"
    }
},
    {
        timestamps:true,
    }
);
module.exports = mongoose.model("User",userSchema);