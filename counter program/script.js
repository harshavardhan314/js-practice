
let val= document.getElementById("count").textContent;
document.getElementById("increase").onclick=function()
{
    val=Number(val);
    val+=1;
    document.getElementById("count").textContent=val;
}
document.getElementById("decrease").onclick=function()
{
    val=Number(val);
    val-=1;
    document.getElementById("count").textContent=val;
}
document.getElementById("reset").onclick=function()
{
    val=0;
    document.getElementById("count").textContent=val;
}
