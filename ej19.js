function iniciar(){
    var v1 = [] ;
    var v2 = [];

    for (let i=0 ; i < 50; i++){
       v1[i]=(Math.random()*100).toFixed(0); 
    }

    //console.log(v1);
    alert(v1);
    v1.sort();

    //console.log(v1);
    alert(v1);

    for (let i=0 ; i < 20; i++){
        if ( i <= 10)
            v2[i]=v1[i];
        else
            v2[i]=0.5;
    }

    //console.log(v2);
    alert(v2)
}