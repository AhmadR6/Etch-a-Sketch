const container = document.getElementById("container");
const inputBtn = document.getElementById("inputBtn");
const randomColorBtn = document.getElementById("random-color");
const eraserBtn = document.getElementById("eraser-btn");
inputBtn.addEventListener("click", () => {
  const squarePerSide = parseInt(prompt("Enter Number less then 100"));
  if (squarePerSide > 0 && squarePerSide < 100) {
    makeGrid(squarePerSide);
  } else {
    alert("Please enter an number between 1 and 100");
  }
});

const randomColor = () => {
  let colorArr = [];
  for (let i = 0; i < 3; i++) {
    const randomRgbVal = Math.floor(Math.random() * 256);
    colorArr[i] = randomRgbVal;
  }

  return colorArr;
};
randomColor();
const makeGrid = (squarePerSide) => {
  container.innerHTML = "";
  const squareSize = container.clientWidth / squarePerSide;
  let isRandomColorMode = false;
  randomColorBtn.addEventListener("click", () => {
    isRandomColorMode = !isRandomColorMode;
  });
  let isEraserModeOn = false;
  eraserBtn.addEventListener("click", () => {
    isEraserModeOn = !isEraserModeOn;
  });
  for (let i = 1; i <= squarePerSide * squarePerSide; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.border = "1px solid rgb(61, 60, 60)";
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      if (isRandomColorMode) {
        const colorArr = randomColor();
        square.style.backgroundColor = `rgb(${colorArr[0]},${colorArr[1]},${colorArr[2]})`;
      } else {
        square.style.backgroundColor = "red";
      }
      if (isEraserModeOn) {
        square.style.backgroundColor = "white";
      }
    });
    container.appendChild(square);
  }
};

makeGrid(16);
