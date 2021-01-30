var span = document.getElementsByClassName('flecha');
var div = document.getElementsByClassName('ccard');
var a= 0;
span[1].onclick=()=>{
    a++;
    for(var i of div)
    {
        if(a==0){i.style.left='0px';}
        if(a==1){i.style.left='-740px';}
        if(a==2){i.style.left='-1480px';}
        if(a==3){i.style.left='-2220x';}
        if(a==4){i.style.left='-2960x';}
        if(a>4){a=4}
    }
    
}
span[0].onclick=()=>{
    a--;
    for(var i of div)
    {
        if(a==0){i.style.left='0px';}
        if(a==1){i.style.left='-740px';}
        if(a==2){i.style.left='-1480px';}
        if(a==3){i.style.left='-2220x';}
        if(a<0){a+0}
       
    }
    
}