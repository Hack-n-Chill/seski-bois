const {admin,db}=require('../utils/admin');
const firebase=require('../utils/configure');
const {validateSignupData}=require('../utils/validators');

const auth=firebase.auth()

exports.getsignup=async(req,res)=>{
    res.send("Signup page");
}

exports.postsignup= async(req,res)=>{
   try
   {
        let token,userId;
    const newUser={
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        name:req.body.name,
        mobile:req.body.mobile
    }
    const { valid, errors } = validateSignupData(newUser);

  if (!valid) {return res.status(400).json(errors);}
 await db.doc(`user/${req.body.email}`).get().then(doc=>{
    if(doc.exists)
    {
        return res.status(400).json({msg:"Account already in use"})
    }
    
    auth.createUserWithEmailAndPassword(newUser.email,newUser.password)
    .then((data) => {
        userId = data.user.uid;
        return data.user.getIdToken();
      })
      .then((Idtoken)=>{
         token=Idtoken;
        return db.doc(`users/${req.body.email}`).set({
            email:newUser.email,
            name:newUser.name,
            mobile:newUser.mobile,
            addedAt:new Date().toISOString(),
            stock_data: [],
            userId
        })
      })
     .then(()=>{
         console.log(req.user)
    return res.status(201).json({token})
  }).catch(err=>{
      console.log(`Bad Request : ${err.message}`)
  })
 }
 )
}
catch(err)
{
    console.log(err);
}

}
