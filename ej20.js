function iniciar(){
    var v1 = [[3],[6],[9],[12],[15]] ;
    var v2 = [];

    //console.log(v1);
    alert(v1);

    for (let i=0 ; i < v1.length - 1; i++){
            v2[i]=v1[i+1][0];
    }
 
    v2[v2.length ] = v1[v1.length-1][0] + v1[0][0]
    console.log(v2);
    alert(v2)
}