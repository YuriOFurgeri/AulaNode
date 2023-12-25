"use strict";
///let nome:string='aaaaa';
///let idade:number=20;
//console.log("AAA",nome,"e",idade);
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
///server.get('/',(req:Request,Res:Response)=>{
///    Res.send('Ola mundo')
server.get('/noticia/titulo-noticia', (req, Res) => {
    Res.send('olha a noticia na tela');
});
///});
server.listen(8080);
