

const submit=document.getElementById("submit");
submit.onclick =function()
{
   let age=document.getElementById("text").value;
console.log(age);
    if(age>=18)
    {
        document.getElementById("h1").textContent="ready to vote";
    }
    else{
        document.getElementById("h1").textContent="not eligible";
    }



}