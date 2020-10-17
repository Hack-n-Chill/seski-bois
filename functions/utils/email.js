const nodemailer=require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });

  async function wrapedSendMail(mailOptions){
    return new Promise((resolve,reject)=>{

 transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log("error is "+error);
       resolve(false); // or use rejcet(false) but then you will have to handle errors
    } 
   else {
       console.log('Email sent: ' + info.response);
       resolve(true);
    }
   });
   }
   )}

   exports.sendmail= async(email)=>{      
    var mailOptions = {
        from:"youremail@gmail.com",
        to:email,
        subject:"Stock updates from the stocker",
        text:"Please check our app for the latest updates"
    };
    let resp= await wrapedSendMail(mailOptions);
    // log or process resp;
     return resp;
  } 