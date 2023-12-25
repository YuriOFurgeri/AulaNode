type produto={
    titulo:string,
    preco:number
}

const data:produto[]=[
    {titulo:'produto x',preco:10},
    {titulo:'produto y',preco:15},
    {titulo:'produto k',preco:7}
 ];

export const produto={
    getAll:():produto[]=>{
        return data;
    },


    getMaiores:(preco:number):produto[]=>{
        return data.filter(item=>{
            if(item.preco>=preco){
                return true;
            }
            else
            {
                return false;
            }
        });
    }

    
};