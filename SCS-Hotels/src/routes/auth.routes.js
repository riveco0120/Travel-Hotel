import { Router, } from "express";

const router = Router();

router.get('/login', (req,res) =>{
    res.send('Esto es la ruta del login para entrenar');
});

router.post('/login', (req,res) =>{
    res.send('Esto es la ruta del login para entrenar');
});

router.get('/signup', (req,res) =>{
    res.send('Esto es la ruta de registro');
});

router.post('/signup', (req,res) =>{
    res.send('Esto es la ruta de registro');
});

export default router;
