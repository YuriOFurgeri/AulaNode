import {Request, Response} from 'express';

export const contato=(req:Request,res:Response)=>{
    res.render('contato');
}

export const sobre=(req:Request,res:Response)=>{
    res.render('sobre');
}

export const usuario=(req:Request,res:Response)=>{
    res.render('usuario');
}

export const animais=(req:Request,res:Response)=>{
    res.render('animais');
}