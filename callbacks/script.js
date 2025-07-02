let arr=[7,2,3,4,5];
const val=(arr.reduce(display));
console.log(val);
function display(prev,curr)
{
    return Math.min(prev,curr);

}