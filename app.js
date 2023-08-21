import  express  from "express";
import cors from "cors"
import path from "path"
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import fs from "fs"
import Routes from "./Routes/routes.js";
import { fileURLToPath } from 'url';
dotenv.config()
// import Instagram from "../React-vite-project/src/Instagram/Instagram.jsx";



const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)




app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname,"./React-vite-project/dist")))
app.get("*", (req,res)=>{
   res.sendFile(path.join(__dirname, "./React-vite-project/dist/index.html"))
})
app.use(cors({
   // origin: [process.env.FRONTEND_URL],
   origin: '*' ,
   Credential:true,
   optionSuccessStatus:200,
}))


app.use(cookieParser())

app.use('/instagram' ,Routes)


app.use("/", (req,res)=>{
   res.json({
      success : true,
      message : "WelCome to instagram"
   })
})
app.get("/", (req,res)=>{
   // console.log(fileURLToPath.__dirname("Instagram.jsx"));
   // res.sendFile(`${path.join(fileURLToPath.__dirname("Instagram.jsx"))}../public`);

})





app.all('*', (req,res)=>{
   res.status(404).send("OOPS!! 404 page not found")
})

export default app