

const textbox=document.getElementById("temperature");
const ctf=document.getElementById("ctf");
const ftc=document.getElementById("ftc");
const result=document.getElementById("result");
let temp;

function convert()
{

   

    if(ctf.checked)
    {
        temp=textbox.value;
        temp=Number(temp);
        temp=temp*9/5+32;
         result.textContent=temp.toFixed(1)+"°F";
    }
   
    else if(ftc.checked)
    {
         temp=textbox.value;
        temp=Number(temp);
        temp=5/9*(temp-32);
         result.textContent=temp.toFixed(1)+"°C";

    }
    else{
        result.textContent="select valid unit";
    }
}