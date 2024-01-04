const updateResult = () => {
  const square = document.querySelector(".square");
  const result = document.getElementById("result");
  const [width, height] = [square.offsetWidth, square.offsetHeight];

  result.innerHTML = `<span>${width}px × ${height}px</span>${
    width === height ? "✅ SQUARE" : "❌ NOT SQUARE"
  }`;
};

window.addEventListener("resize", updateResult);
updateResult();
