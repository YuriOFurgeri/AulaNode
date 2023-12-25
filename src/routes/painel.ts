import{Router, Request, Response } from "express";

const router = Router()
router.get('/', (req:Request, res:Response)=>{
    res.send('Ola mundo PAINEL');
});
router.get('/contato',(req:Request,res:Response)=>{

res.send('formulario de contat PAINEL');
});

router.get('/sobre',(req:Request,res:Response)=>{
res.send('Pagina institucional sobre a empresa PAINEL')
});

export default router;