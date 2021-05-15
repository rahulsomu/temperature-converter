let upperField=document.querySelector('.upper-input-box');
let lowerField=document.querySelector('.lower-input-box');


upperField.addEventListener('keyup',()=>{
    
    let celcius=upperField.value;
    if(celcius!=''){
        result=Math.round((celcius*9/5)+32);
        console.log(result);
        lowerField.value=result;

    }
    else{
        lowerField.value='';
    }
   
   

})
lowerField.addEventListener('keyup',()=>{
    let fahrenheit=lowerField.value;
    if(fahrenheit!=""){
        result=Math.round((fahrenheit-32)*5/9);
        console.log(result);
        upperField.value=result;

    }
    else{
        upperField.value='';
    }
   
   

})


