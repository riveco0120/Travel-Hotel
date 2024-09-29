import { Router, } from "express";

const router = Router();

router.get('/login', (req,res) =>{
    res.send('Esto es la ruta del login');
});

router.get('/signup', (req,res) =>{
    res.send('Esto es la ruta de registro');
});

export default router;
