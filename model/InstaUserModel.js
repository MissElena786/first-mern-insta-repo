import {Schema, model} from "mongoose"


const InstaUserSchema = new Schema({
   mobile : {
      type : String,
      required : [true,'Mobile number is required'],
      trim : true,
      unique : [true, "Number is already Exist"]

   },
   fullName :{
      type : String,
      required : [true,'name is required is required'],
      trim : true
   },
   email:{
      type:  String,
      required:[true , "email is required"],
      trim :true,
      unique : true
   },
   password :{
      type:  String,
      required : [true,'password is required' ],
      // select : false
   },
      // timestamps: true
   
})

const InstaUser = model('insta-user', InstaUserSchema)

export default InstaUser