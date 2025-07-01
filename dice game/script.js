
function roll()
{
    const num=document.getElementById("input").value;
    const dice_result=document.getElementById("result");
    const dice_images=document.getElementById("images");
    const result=[];
    const images=[];
    for(let i=0;i<num;i++)
    {
        let temp=Math.floor(Math.random()*6+1);
        result.push(temp);
        images.push(`<img src="dice_images/${temp}.png">`);


        
    }
    dice_result.textContent = "Dice: " + result.join(", ");
    dice_images.innerHTML=images.join(" " );



}