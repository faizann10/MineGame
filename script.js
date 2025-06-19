const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("clicked")) {
      console.log(`Button already clicked`);
    } else {
      const rand = Math.floor(Math.random() * 10) + 1;
      const back = box.querySelector(".back");
      const img = back.querySelector("img");
      if (rand == 1) {
        img.src = "./images/bomb.png";
        box.classList.add("clicked");
        disableAll();
      } else {
        img.src = "./images/diamond.png";
      }
      box.style.transform = "rotateY(180deg)";
      box.classList.add("clicked");
      box.style.background = "hsl(0, 0%, 35%)";
    }
  });
});

function disableAll() {
  boxes.forEach((box) => {
    const back2 = box.querySelector(".back");
    const img2 = back2.querySelector("img");
    if (box.classList.contains("clicked") == false) {
      img2.src = "./images/diamond.png";
      box.style.transform = "rotateY(180deg)";
      box.classList.add("clicked");
      box.style.background = "hsl(0, 0%, 35%)";
    }
  });
}
