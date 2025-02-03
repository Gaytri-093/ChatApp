import User from "../models/user.js"
import bcrypt from "bcryptjs"
import createTokenAndSaveCookie from "../jwt/token.js"

export const signUp = async(req,res)=>{
    const {fullname, email, password, confirmPassword } = req.body;
    
   try{
    if(password !== confirmPassword){
        return res.status(400).json({error: "password do not match"});
    }
    const user = await User.findOne({email});
    if(user){
        return res.status(400).json({error:"user already exist"});
    }

    // Hash Password 
    const hashPassword = await bcrypt.hash(password,10);

    const newUser = await new User({
        fullname,
        email,
        password:hashPassword,
    })
   await newUser.save();
   if(newUser){
    createTokenAndSaveCookie(newUser._id,res);
    res.status(201).json({message:"user created successfully",
        user:{
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email
     },});

   }
   
   }
   catch(error){
    console.log(error);
    res.status(500).json({error:"Internal server error"});
   }
};

export const login = async (req, res)=>{
    const  {email, password} = req.body;
    try{
        
         const user = await User.findOne({email});
         const isMatch = await bcrypt.compare(password,user.password);

         if(!user || !isMatch){
            res.status(400).json({error:"Invalid Credentials"});
         }
         createTokenAndSaveCookie(user._id,res);
         res.status(200).json({message: "User logged in successfully",
            user:{
            _id: user._id,
            fullname: user.fullname,
            email: user.email
         },
        });

    }
    catch(error){
        res.status(500).json({error:"Internal Server error"});
    }
};

// LogOut
export const logOut= async (req,res)=>{
    try{
        res.clearCookie("jwt");
        res.status(201).json({message:"user logged out successfully"});

    }
    catch(error){
        res.status(500).json({error:"Internal Server error"});
    }
}

export const allUsers = async (req, res) => {
    try {
      const loggedInUser = req.user._id;
      const filteredUsers = await User.find({
        _id: { $ne: loggedInUser },
      }).select("-password");
      res.status(201).json(filteredUsers);
    } catch (error) {
      console.log("Error in allUsers Controller: " + error);
    }
  };

