import 'dotenv/config';

import http from 'http';
import express from 'express';
import morgan from 'morgan';

import authRouter from './routes/auth.routes.js';
import './database/connection.js'
import {User, } from './database/models/user.model.js'


async function main(){ 
    const port = +process.env.APP_PORT ?? 4000; 
    const app = express(); 

    app.use(morgan('dev'))
    const httpServer = http.createServer(app);

    app.get('/',(req,res) =>{
        res.send('Hola mundo!');
    })

   const usserExists = await User.findOne({
    where:{
        id:"10000"
    },
   }); 

   if(!usserExists){
    await User.create({
        id:"10000",
        email:"correo@gmail.com",
        password:"12345",
        name :"Sandy salas"
    }).then(()=>{
        console.log("Usuario Creado")
    });
   } 

    app.use('/auth',authRouter)
    
    httpServer.listen(port, ()=> {
    console.log('Server running on port: ' , port)
});
}

main();