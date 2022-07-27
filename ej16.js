function iniciar(){
   
    var v1=[5] 
    var v2 =[5];
    
    for (let i=0 ; i < 5; i++){

         v1[i]=Math.random();
        v2[i]=Math.random();
        
    }

    var s1='';
    var s2='';
    for (let i=0 ; i < 5; i++){

        s1 = s1 + v1[i]+'\n';
        s2 = s2 + v2[i]+'\n';
       
   }

   var msj= `Vector 1 = \n ${s1}
        Vector 2 =\n ${ s2 }`;

    alert(msj);
    
}