function iniciar(){
   
        var v1=[3] 
        var v2 =[3];
        
        for (let i=0 ; i < 3; i++){
    
             v1[i]=Math.random();
            v2[i]=Math.random();
            
        }
    
        var s1='';
        var s2='';
        for (let i=0 ; i < 3; i++){
    
            s1 = s1 + v1[i]+'\n';
            s2 = s2 + v2[i]+'\n';
           
       }
    
       var msjAntes= `Antes\nVector 1 = \n ${s1}
            Vector 2 =\n ${ s2 }`;
    
        alert(msjAntes);

        v1.pop(v1.length-1);
        v1.pop(v1.length-1);
        v2.pop(v2.length-1);
        v2.pop(v2.length-1);

        var ss1='';
        var ss2='';
        for (let i=0 ; i < 3; i++){
    
            ss1 = ss1 + v1[i]+'\n';
            ss2 = ss2 + v2[i]+'\n';
           
       }

        var msjDespues= `Despues\nVector 1 = \n ${ss1}
            Vector 2 =\n ${ ss2 }`;
        
        alert(msjDespues);
}
