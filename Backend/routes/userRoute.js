import express from "express";
import {signUp, login, logOut, allUsers} from "../controller/userController.js"
import secureRoute from "../middleware/secureRoute.js";


const router = express.Router();

router.post("/signUp",signUp);
router.post("/login",login);
router.post("/logOut",logOut);
router.get("/allUsers", secureRoute, allUsers);


export default router;
