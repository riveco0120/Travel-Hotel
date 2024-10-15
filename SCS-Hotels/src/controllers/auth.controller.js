import {
  User,
} from '../database/models/index.js'

export function login(req, res){
  res.send('POST LOGIN')
}

export function signup(req, res){
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
    res.send('POST SEGNUP')   
}