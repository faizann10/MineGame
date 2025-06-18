const title = document.getElementById("title");
const buttons = document.querySelectorAll('.button');
const box = document.getElementById("container");
var bombCount = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const img = button.querySelector('img');
        const rand = Math.floor((Math.random() * 2) + 1);
        if(Number(rand) == 1) {
            img.src = `images/diamond.png`;
        } else {
            img.src = `images/bomb.png`;
            if(bombCount++ >= 2) {
                box.style.display = "none";
                title.innerHTML = "Game Over!";
            }
        }
        button.disabled = true;
    })
});