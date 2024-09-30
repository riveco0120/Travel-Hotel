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
    return res.status()
  }
    res.send('POST SEGNUP')   
}