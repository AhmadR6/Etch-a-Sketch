const container = document.getElementById("container");
let squarePerSide = 16;
const squareSize = container.clientWidth / squarePerSide;

for (let i = 1; i <= squarePerSide * squarePerSide; i++) {
  const square = document.createElement("div");
  square.setAttribute("class", "square");
  square.style.border = "1px solid rgb(61, 60, 60)";
  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;

  container.appendChild(square);
}
