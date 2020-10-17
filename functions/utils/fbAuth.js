const {admin,db}=require('./admin')

module.exports=(req,res,next)=>{
  let idToken
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
     idToken=req.headers.authorization.split('Bearer ')[1]
  }else{
    console.log('No Token found')
    return res.status(403).json({error:'Unauthorized'})
  }
  admin.auth().verifyIdToken(idToken)
  .then(decodedToken=>{
    req.email=decodedToken
    console.log(decodedToken)
    return db.collection('users').where('userId','==',req.email.uid).limit(1).get()
  }).then(data=>{
   req.user.handle=data.docs[0].data().handle
   req.user.imageUrl=data.docs[0].data().imageUrl
   return next()
  })
    .catch(err=>{
      console.error('Error while verifying token',err)
      return res.status(403).json(err)
    })
    return ''
}