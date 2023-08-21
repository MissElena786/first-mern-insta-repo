import Express  from "express";
import { instaRegister, instaLogin } from "../Controllers/controllers.js";
const Routes = Express.Router()
const {} =

Routes.post("/insta-register",instaRegister )
Routes.post("/insta-login",instaLogin )


export  default Routes
