const container = document.getElementById("container");
const inputBtn = document.getElementById("inputBtn");
inputBtn.addEventListener("click", () => {
  container.innerHTML = "";
  const squarePerSide = prompt("Enter Number less then 100");

  makeGrid(squarePerSide);
});
let squarePerSide = 16;

const makeGrid = (squarePerSide) => {
  const squareSize = container.clientWidth / squarePerSide;
  for (let i = 1; i <= squarePerSide * squarePerSide; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.border = "1px solid rgb(61, 60, 60)";
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "red";
    });

    container.appendChild(square);
  }
};
makeGrid(squarePerSide);
