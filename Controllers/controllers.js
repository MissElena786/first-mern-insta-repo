import InstaUser from "../model/InstaUserModel.js";

const instaRegister = async (req, res) => {
  const { mobile, fullName, email, password } = req.body;

  if (!mobile || !fullName || !email || !password) {
    return res.status(401).json({
      success: false,
      message: "All fields are required",
    });
  }

  const userExiist = await InstaUser.findOne({ email });

  if (userExiist) {
    return res.status(500).json({
      success: false,
      message: "This email is already exist",
    });
  }

  const user = await InstaUser.create({
    mobile,
    fullName,
    email,
    password,
  });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "ragistration is false, please try again!",
    });
  }

  await user.save();
  res.status(200).json({
    success: true,
    message: "User registered succesfully",
  });
};





const instaLogin = async (req, res, next) => {
  const { email, password } = req.body;
    

  try {
    
 
  if (!email || !password) {
    res.status(401).json({
      success: false,
      message: "email and password is required ",
    });
  }else{

  const user = await InstaUser.findOne({ email });
  if (user) {
     if(user.password ==  password){
      return res.status(200).json({
         success: true,
         message: "userLogged in successfully",
       })
     }else{
      return res.status(500).json({
         success: false,
         message: "password is not matched",
       });
     }
  } else {
      return res.status(400).json({
        success: false,
        message: "user not registered",
      });
    }
  }
} catch (error) {
     console.log(error);
  }
}



  //    try {
  //       const userData= await InstaUser.findOne({email});
  //       if(userData){
  //           // checking password provided by user is correct or not
  //           if(userData.password == password){
  //               res.status(200).send({msg:"User Login Successfully, Enjoy!"})
  //           }else{
  //               res.status(401).send({msg:"You have Entered Wrong Password"})
  //           }
  //       }else{
  //           res.status(404).send({msg:"No Account Find associated to this email"})
  //       }

  //   } catch (error) {
  //       res.status(501).send({msg:error.message})
  //   }

// const instaLogin = async (req, res)=>{
//     let user = await InstaUser.findOne(req.body)
//     res.send(user)
// }
export { instaRegister, instaLogin };
