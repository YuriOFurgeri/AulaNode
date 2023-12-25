import{Request,Response} from 'express';
import {produto} from '../models/Produto';
import {animais} from '../models/Animais';

/*
export const home =(req:Request,res:Response)=>{
    let idade:number=90;
    let exibe:boolean=false;
    if (idade>50){
       exibe=true;
    }

    let lista=produto.getAll()
    
    let listaProdutosCaros=produto.getMaiores(12)
    
     res.render('home',{
       nome:"yuri",
       idade:21,
       exibe,
       caros:listaProdutosCaros,
       produtos:lista,

       saudacoes:[
          'bom dia',
          'boa tarde',
          'boa noite'
       ]
     });
    }
    */
/*
    export const home =(req:Request,res:Response)=>{
      
  
      let lista=animais.getAll()
      
//      let listaAnimaisRaca=animais.getRaca(12)
      
       res.render('home',{
         
         //caros:listaProdutosCaros,
         animais:lista,
  
       /*  saudacoes:[
            'bom dia',
            'boa tarde',
            'boa noite'
         ]
         
       });
      }
      */

      export const home =(req:Request,res:Response)=>{
      
  
         let lista=animais.getAll()
         
         let listaAnimaisRaca=animais.getRaca('fish')
         
          res.render('animais',{
            
            //caros:listaProdutosCaros,
            animais:lista,
            peixes:listaAnimaisRaca,
          /*  saudacoes:[
               'bom dia',
               'boa tarde',
               'boa noite'
            ]
            */
          });
         }