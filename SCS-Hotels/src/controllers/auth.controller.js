import {
  User,
} from '../database/models/index.js'

export function login(req, res){
  res.send('POST LOGIN')
}

export async function signup(req, res){
  const {
    email,
    password,
    givenName,
    lastName,
  } = req.body;

  const requiredFilsd =['email','password','givenName','lastName']; 
  for(const field of requiredFilsd){
    if(!req.body[field]){
      return res
      .status(401)
      .json({
        success:false,
      message:"Faltan Campos Requeridos" 
    })
  }
}

const user = await User.findOne({
  where: {
    email,
   }
});
if(user){
  return res
  .status(400)
  .json({
    success:false,
  message:"El usuario ya existe"
})
}

const created = await User.create({
  email,
  password,
  givenName,
  lastName
}); 

    res.send('POST SEGNUP')   
}