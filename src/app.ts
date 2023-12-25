///let nome:string='aaaaa';
///let idade:number=20;
//console.log("AAA",nome,"e",idade);

/*
import express,{Request,Response} from 'express';
const server=express();
server.get('/',(req:Request,Res:Response)=>{
    Res.send('Ola mundo')
    

});
server.get('/noticia/titulo-noticia',(req:Request,Res:Response)=>{
    Res.send('olha a noticia na tela');
});

server.get('/noticia/:slug',(req:Request,Res:Response)=>{
    let slug : string=req.params.slug;
    Res.send('Noticia: '+ slug);
});

server.get('/voo/:origem-:destino',(req:Request,Res:Response)=>{
    let {origem,destino} =req.params;
    Res.send('Procurando voos de: '+ origem.toUpperCase() +' ate ' + destino.toUpperCase());
});


server.listen(8080);
*/
import express,{Request,Response} from 'express';
import path from 'path';
import minhasRotas from './routes/rotas';
import painelrotas from './routes/painel';
import mustache from 'mustache-express';
const server=express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache',mustache());

server.use(minhasRotas);
server.use('/painel',painelrotas);

server.use((req:Request,res:Response)=>{
    res.status(404).send('pagina não encontrada');
});
server.listen(8080);

console.log('http://localhost:8080');
