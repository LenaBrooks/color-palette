const palette = document.querySelector("#palette");
const generateBtn = document.querySelector("#generateBtn");

function generateColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function generatePalette() {
  palette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = generateColor();

    const colorElement = document.createElement("div");
    colorElement.className = "color";
    colorElement.style.backgroundColor = color;
    colorElement.textContent = color;

    colorElement.addEventListener("click", async () => {
      await navigator.clipboard.writeText(color);
      colorElement.textContent = "Copied!";
      
      setTimeout(() => {
        colorElement.textContent = color;
      }, 800);
    });

    palette.appendChild(colorElement);
  }
}

generateBtn.addEventListener("click", generatePalette);

generatePalette();
