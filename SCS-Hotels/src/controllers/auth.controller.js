import {hashPassword, verifyPassword} from '../services/auht.service.js'
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
    giveName,
    lastNAme,
    phoneNumber,
    address
  } = req.body;

  const requiredFilsd =['email','password','giveName','lastNAme','phoneNumber','address']; 
  for(const field of requiredFilsd){
    if(!req.body[field])return res
      .status(401)
      .json({
        success:false,
      message:"Faltan Campos Requeridos" 
    })
}

if(password.leng<8)return res
  .status(401)
  .json({
    success:false,
  message:"la contraseña debe tener minimo 8 caracteres"
})


const user = await User.findOne({
  where: {
    email,
   }
});
if(user) return res
  .status(400)
  .json({
    success:false,
  message:"El usuario ya existe"
})


const passwordHash = await hashPassword(password)

const created = await User.create({
  email,
  password: passwordHash,
  giveName,
  lastNAme,
  phoneNumber,
  address
}); 

if(!created) return res
  .status(500)
  .json({
    success:false,
  message:'El usuario no se pudo crear', 
})

  return res
  .status(201)
  .json({
    success:false,
  message:'El usuario se ha creado', 
})
}