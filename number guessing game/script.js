const min = 1;
const max = 100;

// Generate a random integer between min and max
const val = Math.floor(Math.random() * (max - min + 1)) + min;

let num = Number(window.prompt(`Enter a number between ${min} and ${max}`));

while (num !== val) {
    if (num > val) {
        window.alert("Too high");
    } else if (num < val) {
        window.alert("Too low");
    }

    // Ask again
    num = Number(window.prompt(`Enter a number between ${min} and ${max}`));
}

window.alert("You won!!!");
