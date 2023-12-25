import {Router, Request, Response} from "express";
import * as HomeController from '../controllers/homeController';
import * as infoController from '../controllers/infoController';

const router = Router()
router.get('/',HomeController.home);


router.get('/contato',infoController.contato);
router.get('/sobre',infoController.sobre);
router.get('/usuario',infoController.usuario);
router.get('/animais',infoController.animais);

router.get('/sobre',(req:Request,res:Response)=>{
res.send('Pagina institucional sobre a empresa')
});

export default router;