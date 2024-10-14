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

  if(!email || !password || givenName || lastName){
    return res
    .status(401)
    .json({
      success:false,
      message:"Faltan Campos Requeridos"
    })
  }
    res.send('POST SEGNUP')   
}