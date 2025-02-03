import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res)=>{
    const token= jwt.sign({userId},process.env.JWT_TOKEN,{
        expiresIn:"30d"
    });
    res.cookie("jwt",token,{
        httpOnly:true,  //prevent from xss attacks
        secure:true,   
        sameSite:"strict"  //prevent from attack csrf
    });
    
}

export default createTokenAndSaveCookie;